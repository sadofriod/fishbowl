import React, { Component } from 'react';
import {
    View,
    Text,
    AsyncStorage,
    Image,
    TouchableHighlight,
} from 'react-native';
import io from 'socket.io-client';
import { styles } from './style/topComponentStyle';
import init from 'react_native_mqtt';
init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {
    }
});
export default class topComponent extends Component {
    constructor(props) {
        let ran = Math.random(10000)
        super(props)
        this.state = {
            store: 0,
            td1: 0,
            paramTemp: 0,
            comment: 'Bad',
            client: new Paho.MQTT.Client('47.93.253.168', 9000, 'client' + ran)
        }
        this.commentArray = commentArray = ['Bad', 'Normal', 'Good', 'Perfect'];
        this.socket = {
            io: io.connect('http://112.74.165.209/test'),
        }
    }
    componentDidMount() {
        let i = 0;

        let self = this;
        this.state.client.connect({
            onSuccess: () => {
                console.log('success');
                this.state.client.subscribe("/CloudAquarium1/send", {
                    qos: 0, onSuccess: (payload) => {
                        console.log(payload);
                    }
                })
            }, useSSL: false
        });
        this.state.client.onConnectionLost = (responseObject) => {
            if (responseObject.errorCode !== 0) {
                console.log("onConnectionLost:" + responseObject.errorMessage);
            }
        }
        this.state.client.onMessageArrived = (message) => {
            let data = JSON.parse(eval(JSON.stringify(message.payloadString)));
            self.setState({
                td1: data.temp,
            }, () => {
                let temp = 100 - 1.5 * Math.abs(self.state.td1 - self.state.paramTemp);
                console.log(temp)
                if (temp <= 51)
                    self.setState({ comment: self.commentArray[0] });
                if (temp <= 61)
                    self.setState({ comment: self.commentArray[1] });
                if (temp <= 81)
                    self.setState({ comment: self.commentArray[2] });
                if (temp <= 91)
                    self.setState({ comment: self.commentArray[3] });
                self.setState({
                    store: 100 - 1.5 * Math.abs(self.state.td1 - self.state.paramTemp)
                })

            })
        }
        let getFishList = fetch('http://39.105.18.219:3000/selectAllFish', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: ''
        });
        getFishList.then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => {
            console.log(data.result);
            this.setState({
                paramTemp: data.result[0].temperature
            }, function () {
                console.log(100 - 1.5 * Math.abs(this.state.td1 - this.state.paramTemp))

            })
        })
    }
    componentDidUpdate() {
        // this.setState({
        //     store: 100-1.5*Math.abs(this.state.td1-this.state.paramTemp)
        // })
        // console.log(100-1.5*Math.abs(this.state.td1-this.state.paramTemp))
        // switch ((100-1.5*Math.abs(this.state.td1-this.state.paramTemp))) {
        //     case 51:
        //         this.setState({ comment: this.commentArray[0] });
        //         break;
        //     case 61:
        //         this.setState({ comment: this.commentArray[1] });
        //         break;
        //     case 81:
        //         this.setState({ comment: this.commentArray[2] });
        //         break;
        //     case 91:
        //         this.setState({ comment: this.commentArray[3] });
        //         break;
        // }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.navigatorBar}></View>
                    <Text style={styles.headerTitle}>云水族环境参数</Text>
                    <View style={styles.AddressBox}>
                        <Image style={{ height: 18, width: 18 }} source={require('../img/address.png')} />
                        <Text style={styles.Address}>
                            内蒙古工业大学格物楼
                        </Text>
                    </View>
                </View>
                <View style={styles.topMain}>
                    <Text style={styles.topMainTitle}>Real Time Monitoring</Text>
                    <View style={styles.topMainContent}>
                        <Text style={styles.topMainContentStroe}>{this.state.store}</Text>
                        <Text style={styles.stroeComment}>{this.state.comment}</Text>
                        <TouchableHighlight style={styles.topMainButton}>
                            <Text style={{ color: 'rgba(255,255,255,.75)', fontSize: 12 }}>Refresh</Text>
                        </TouchableHighlight>
                    </View>

                </View>
            </View>
        )

    }
}