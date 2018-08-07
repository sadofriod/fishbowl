import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Dimensions
} from 'react-native';

import io from 'socket.io-client';

let socket;
console.log(socket)

import {
    RTCPeerConnection,
    RTCMediaStream,
    RTCIceCandidate,
    RTCSessionDescription,
    RTCView,
    MediaStreamTrack,
    getUserMedia,
} from 'react-native-webrtc';

const configuration = { "iceServers": [{ "url": "stun:stun.voipbuster.com:3478" }] };

const pcPeers = {};
let localStream;

function getLocalStream(isFront, callback) {

    let videoSourceId;
    console.log('getlocalSteam');
    console.ignoredYellowBox = ['Setting a timer'];
    getUserMedia({
        audio: false,
        video: {
            mandatory: {
                minWidth: 640, // Provide your own width, height and frame rate here
                minHeight: 360,
                minFrameRate: 30,
            },
            facingMode: (isFront ? "user" : "environment"),
            optional: (videoSourceId ? [{ sourceId: videoSourceId }] : []),
        }
    }, function (stream) {
        console.log('getUserMedia success', stream);
        callback(stream);
    }, logError);
}

function join(roomID) {
    socket.emit('join', roomID, function (socketIds) {
        console.log('join', socketIds);
        for (const i in socketIds) {
            const socketId = socketIds[i];
            createPC(socketId, true);
        }
    });
}

function createPC(socketId, isOffer) {
    const pc = new RTCPeerConnection(configuration);
    pcPeers[socketId] = pc;
    console.log('1235' + container);

    pc.onicecandidate = function (event) {
        console.log('onicecandidate', event.candidate);
        if (event.candidate) {
            socket.emit('exchange', { 'to': socketId, 'candidate': event.candidate });
        }
    };

    function createOffer() {
        pc.createOffer(function (desc) {
            console.log('createOffer', desc);
            pc.setLocalDescription(desc, function () {
                console.log('setLocalDescription', pc.localDescription);
                socket.emit('exchange', { 'to': socketId, 'sdp': pc.localDescription });
            }, logError);
        }, logError);
    }

    pc.onnegotiationneeded = function () {
        console.log('onnegotiationneeded');
        if (isOffer) {
            createOffer();
        }
    }

    pc.oniceconnectionstatechange = function (event) {
        console.log('oniceconnectionstatechange', event.target.iceConnectionState);
        if (event.target.iceConnectionState === 'completed') {
            setTimeout(() => {
                getStats();
            }, 1000);
        }
        // if (event.target.iceConnectionState === 'connected') {
        //     createDataChannel();
        // }
    };
    pc.onsignalingstatechange = function (event) {
        console.log('onsignalingstatechange', event.target.signalingState);
    };

    pc.onaddstream = function (event) {
        console.log('onaddstream', event.stream);
        // console.log('123'+container);
        container.setState({ info: 'One peer join!' });

        const remoteList = container.state.remoteList;
        remoteList[socketId] = event.stream.toURL();
        container.setState({ remoteList: remoteList });
    };
    pc.onremovestream = function (event) {
        console.log('onremovestream', event.stream);
    };

    pc.addStream(localStream);
    // function createDataChannel() {
    //     if (pc.textDataChannel) {
    //         return;
    //     }
    //     const dataChannel = pc.createDataChannel("text");

    //     dataChannel.onerror = function (error) {
    //         console.log("dataChannel.onerror", error);
    //     };

    //     dataChannel.onmessage = function (event) {
    //         console.log("dataChannel.onmessage:", event.data);
    //         container.receiveTextData({ user: socketId, message: event.data });
    //     };

    //     dataChannel.onopen = function () {
    //         console.log('dataChannel.onopen');
    //         container.setState({ textRoomConnected: true });
    //     };

    //     dataChannel.onclose = function () {
    //         console.log("dataChannel.onclose");
    //     };

    //     pc.textDataChannel = dataChannel;
    // }
    return pc;
}

function exchange(data) {
    const fromId = data.from;
    let pc;
    if (fromId in pcPeers) {
        pc = pcPeers[fromId];
    } else {
        pc = createPC(fromId, false);
    }

    if (data.sdp) {
        console.log('exchange sdp', data);
        pc.setRemoteDescription(new RTCSessionDescription(data.sdp), function () {
            if (pc.remoteDescription.type == "offer")
                pc.createAnswer(function (desc) {
                    console.log('createAnswer', desc);
                    pc.setLocalDescription(desc, function () {
                        console.log('setLocalDescription', pc.localDescription);
                        socket.emit('exchange', { 'to': fromId, 'sdp': pc.localDescription });
                    }, logError);
                }, logError);
        }, logError);
    } else {
        console.log('exchange candidate', data);
        pc.addIceCandidate(new RTCIceCandidate(data.candidate));
    }
}

function leave(socketId) {
    console.log('leave', socketId);
    const pc = pcPeers[socketId];
    const viewIndex = pc.viewIndex;
    pc.close();
    delete pcPeers[socketId];

    const remoteList = container.state.remoteList;
    delete remoteList[socketId]
    container.setState({ remoteList: remoteList });
    container.setState({ info: 'One peer leave!' });
}





function logError(error) {
    console.log(error);
}

function mapHash(hash, func) {
    const array = [];
    for (const key in hash) {
        const obj = hash[key];
        array.push(func(obj, key));
    }
    return array;
}

function getStats() {
    const pc = pcPeers[Object.keys(pcPeers)[0]];
    if (pc.getRemoteStreams()[0] && pc.getRemoteStreams()[0].getAudioTracks()[0]) {
        const track = pc.getRemoteStreams()[0].getAudioTracks()[0];
        console.log('track', track);
        pc.getStats(track, function (report) {
            console.log('getStats report', report);
        }, logError);
    }
}

let container;

export default class VideoCalls extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => true });
        this.state = {
            info: 'Initializing',
            status: 'init',
            roomID: '',
            isFront: true,
            selfViewSrc: null,
            remoteList: {},
            textRoomConnected: false,
            textRoomData: [],
            textRoomValue: '',
        }
        socket = io.connect('https://react-native-webrtc.herokuapp.com', { transports: ['websocket'] });
        console.log(socket)
        container = this;
        socket.on('connect', function (data) {
            console.log('connect');
            getLocalStream(true, function (stream) {
                localStream = stream;
                container.setState({ selfViewSrc: stream.toURL() });
                container.setState({ status: 'ready', info: 'Please enter or create room ID' });
                                
            });
        });
    }
    static navigationOptions = {
        header: null
    }
    componentDidMount() {
        socket.on('exchange', function (data) {
            exchange(data);
        });
        socket.on('leave', function (socketId) {
            leave(socketId);
        });
        join("123");
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.state.info}
                </Text>
                <RTCView streamURL={this.state.selfViewSrc} style={styles.selfView} />
                {
                    mapHash(this.state.remoteList, function (remote, index) {
                        return <RTCView key={index} streamURL={remote} style={styles.remoteView} />
                    })
                }
            </View>
        );
    }
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
    selfView: {
        position: 'absolute',
        right:-win.width*0.3,
        top: 0,
        width: win.width,
        height: win.height * 0.3,
    },
    remoteView: {
        width: win.width,
        height: win.height,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent:'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color:'#fff'
    },
    listViewContainer: {
        height: 150,
    },
});