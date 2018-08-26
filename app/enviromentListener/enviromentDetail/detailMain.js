import React, { Component } from 'react';
import {
    View,
    Dimensions,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    AsyncStorage,
    ToastAndroid,
    WebView
} from 'react-native';
import { styles, win } from './detailMainStyle';
import init from 'react_native_mqtt';
import Vedio from '../../videoCalls/videoCall';
init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {
    }
});

export default class Detail extends Component {
    constructor(props) {
        super(props);
        Detail.prototype.caller = () => {
            return this.props;
        }
        let ran = Date.now()
        // {"heating":"1","oxygen":"1","change":"0","cooling":"0","feed":"0","filtration":"1"}
        this.state = {
            client: new Paho.MQTT.Client('47.93.253.168', 9000, 'client1'+ran),
            td1: 0,
            td2: 0.0,
            td3: 7,
            defaultTemperture:'',
            defaultPH:'',
            flag4: 0,
            flag5: 0,
            flag6: 0,
            flag9: 0,
            flag7: 0,
            flag8: 0,
            oxygen: 0,
            feed: 0,
            filtration: 0,
            heating: 0,
            cooling: 0,
            change: 0,
            manual: 1,
            v: <Vedio />
        }
        console.log(ran)
        this.state.client.onConnectionLost = (responseObject) => {
            if (responseObject.errorCode !== 0) {
                console.log("onConnectionLost:" + responseObject.errorMessage);
            }
        }
    }
    static navigationOptions = {
        headerRight: <TouchableOpacity style={{
            height: 30,
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 15
        }} onPress={() => Detail.prototype.caller()}>
            <Text>switch fishbowl</Text>
        </TouchableOpacity>,
        headerStyle: {
            height: 30,
            elevation: 0
        }
    }
    warningItems = (data) => {
        let num = data.key;
        return (
            <TouchableOpacity key={data.key} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 4 }} onPress={() => {
                switch (data.key) {
                    case 4:
                        if (this.state.flag4 == 1) {
                            this.setState({
                                flag4: 0,
                                change: 0,
                            })
                            ToastAndroid.show('Close Water Exchange', ToastAndroid.SHORT)
                            this.state.client.publish('/CloudAquarium1/receive',
                                '{"heating":' + this.state.heating + ',"oxygen":' + this.state.oxygen + ',"change":"0","cooling":' + this.state.cooling + ',"feed":' + this.state.feed + ',"filtration":' + this.state.filtration + '}'
                            )
                            break;
                        }
                        else {
                            this.setState({
                                flag4: 1,
                                change: 1,
                            })
                            ToastAndroid.show('Start Water Exchange', ToastAndroid.SHORT);
                            this.state.client.publish('/CloudAquarium1/receive',
                                '{"heating":' + this.state.heating + ',"oxygen":' + this.state.oxygen + ',"change":"1","cooling":' + this.state.cooling + ',"feed":' + this.state.feed + ',"filtration":' + this.state.filtration + '}'
                            )
                            break;
                        }
                    case 5:
                        this.setState({
                            flag5: 0,
                            feed: 1
                        })
                        ToastAndroid.show('Start Feed', ToastAndroid.SHORT);
                        this.state.client.publish('/CloudAquarium1/receive',
                            '{"heating":' + this.state.heating + ',"oxygen":' + this.state.oxygen + ',"change":"0","cooling":' + this.state.cooling + ',"feed":"1","filtration":' + this.state.filtration + '}'
                        )
                        break;
                    case 6:
                        if (this.state.flag6 == 1) {
                            this.setState({
                                flag6: 0,
                                oxygen: 0,
                            })
                            ToastAndroid.show('Close Oxygen Pump', ToastAndroid.SHORT)
                            this.state.client.publish('/CloudAquarium1/receive',
                                '{"heating":' + this.state.heating + ',"oxygen":"0","change":"0","cooling":' + this.state.cooling + ',"feed":' + this.state.feed + ',"filtration":' + this.state.filtration + '}'
                            )
                            break;
                        }
                        else {
                            this.setState({
                                flag6: 1,
                                oxygen: 1,
                            })
                            ToastAndroid.show('Open Oxygen Pump', ToastAndroid.SHORT);
                            this.state.client.publish('/CloudAquarium1/receive',
                                '{"heating":' + this.state.heating + ',"oxygen":"1","change":"0","cooling":' + this.state.cooling + ',"feed":' + this.state.feed + ',"filtration":' + this.state.filtration + '}'
                            )
                            break;
                        }
                    case 7:
                        if (this.state.flag7 == 1) {
                            this.setState({
                                flag7: 0,
                                cooling: 0,
                            })
                            ToastAndroid.show('Close Fan', ToastAndroid.SHORT);
                            this.state.client.publish('/CloudAquarium1/receive',
                                '{"heating":' + this.state.heating + ',"oxygen":' + this.state.oxygen + ',"change":"0","cooling":"0","feed":' + this.state.feed + ',"filtration":' + this.state.filtration + '}'
                            )
                            break;
                        }
                        else {
                            this.setState({
                                flag7: 1,
                                cooling: 1,
                            })
                            ToastAndroid.show('Open Fan', ToastAndroid.SHORT);
                            this.state.client.publish('/CloudAquarium1/receive',
                                '{"heating":' + this.state.heating + ',"oxygen":' + this.state.oxygen + ',"change":"0","cooling":"1","feed":' + this.state.feed + ',"filtration":' + this.state.filtration + '}'

                            )
                            break;
                        }
                    case 8:
                        if (this.state.flag8 == 1) {
                            this.setState({
                                flag8: 0,
                                heating: 0,
                            })
                            ToastAndroid.show('Close Heating Pump', ToastAndroid.SHORT);
                            this.state.client.publish('/CloudAquarium1/receive',
                                '{"heating":"0","oxygen":' + this.state.oxygen + ',"change":"0","cooling":' + this.state.cooling + ',"feed":' + this.state.feed + ',"filtration":' + this.state.filtration + '}'
                            )
                            break;
                        }
                        else {
                            this.setState({
                                flag8: 1,
                                heating: 1,
                            })
                            ToastAndroid.show('Open Heating Pump', ToastAndroid.SHORT);
                            this.state.client.publish('/CloudAquarium1/receive',
                                '{"heating":"1","oxygen":' + this.state.oxygen + ',"change":"0","cooling":' + this.state.cooling + ',"feed":' + this.state.feed + ',"filtration":' + this.state.filtration + '}'
                            )
                            break;
                        }
                    case 9:
                        if (this.state.flag9 == 1) {
                            this.setState({
                                flag9: 0,
                                filtration: 0,
                            })
                            ToastAndroid.show('Close Filtration Pupm', ToastAndroid.SHORT);
                            this.state.client.publish('/CloudAquarium1/receive',
                                '{"heating":' + this.state.heating + ',"oxygen":' + this.state.oxygen + ',"change":"0","cooling":' + this.state.cooling + ',"feed":' + this.state.feed + ',"filtration":"0"}'

                            )
                            break;
                        }
                        else {
                            this.setState({
                                flag9: 1,
                                filtration: 1,
                            })
                            ToastAndroid.show('Open Filtration Pupm', ToastAndroid.SHORT);
                            this.state.client.publish('/CloudAquarium1/receive',
                                '{"heating":' + this.state.heating + ',"oxygen":' + this.state.oxygen + ',"change":"0","cooling":' + this.state.cooling + ',"feed":' + this.state.feed + ',"filtration":"1"}'

                            )
                            break;
                        }

                }
            }}>
                <View style={{ flex: 1, borderRadius: 8, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                    <Image style={{ height: 30, borderRadius: 15, width: 30 }} source={require('../../img/normal.png')} />
                    <Text>{data.words}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    warningGroup = () => {
        let dataArray = [{
            key: 4,
            words: '换水',
        }, {
            words: '喂食',
            key: 5,
        }, {
            key: 6,
            words: '加氧',
        }, {
            key: 7,
            words: '风扇',
        }, {
            key: 8,
            words: '加热',
        }, {
            key: 9,
            words: '过滤',

        },];
        return dataArray.map(data => this.warningItems(data))
    }
    postData = () => {
        this.setState({
            oxygen: 0,
            feed: 0,
            filtration: 0,
            heating: 0,
            cooling: 0,
            change: 0,
            flag5: 1,
            flag6: 1,
            flag9: 1,
            flag7: 1,
            flag8: 1,
        })
        this.state.client.publish('/CloudAquarium1/receive', '{"heating":' + this.state.heating + ',"oxygen":' + this.state.oxygen + ',"change":' + this.state.change + ',"cooling":' + this.state.cooling + ',"feed":' + this.state.feed + ',"filtration":' + this.state.filtration + '}')
    }

    componentWillUnmount(){
        this.setState({v:null});
    }

    componentDidMount() {
        let self = this;
        this.state.client.connect({
            onSuccess: () => {
                ;
                this.state.client.subscribe("/CloudAquarium1/send", {
                    qos: 1, onSuccess: (payload) => {
                        console.log(payload);
                    }
                })
            }, useSSL: false
        });
        this.state.client.onMessageArrived = (message) => {
            // console.log("onMessageArrived:" + message.payloadString);
            let data = JSON.parse(eval(JSON.stringify(message.payloadString)));
            self.setState({
                td1: data.temp,
                td2: data.LiquidLevel,
                td3: data.pH,
            })
        }
        let getDefautParameter = fetch('http://39.105.18.219:3000/getDefaultParameter', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: ''
        });
        getDefautParameter.then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => {
            let defaultData = JSON.parse(data);
            console.log(defaultData)
            this.setState({
                defaultPH: defaultData[0].ph,
                defaultTemperture: defaultData[0].temperature
            })
        })
    }
    componentDidUpdate() {
        let self = this;
        this.state.client.onMessageArrived = (message) => {
            let data = JSON.parse(eval(JSON.stringify(message.payloadString)));
            // console.log(data);
            self.setState({
                td1: data.temp,
                td2: data.LiquidLevel,
                td3: data.pH,
            })
            if (this.state.manual == 0) {
                if (this.state.td1 > 25.5) {
                    this.state.client.publish('/CloudAquarium1/receive', '{"heating":"0","oxygen":' + this.state.oxygen + ',"change":' + this.state.change + ',"cooling":"1","feed":"0","filtration":' + this.state.filtration + '}')
                }
                if (this.state.td1 >= 24.9 && this.state.td1 <= 25.5) {
                    this.state.client.publish('/CloudAquarium1/receive', '{"heating":"0","oxygen":' + this.state.oxygen + ',"change":' + this.state.change + ',"cooling":"0","feed":"0","filtration":' + this.state.filtration + '}')
                }
                if (this.state.td1 < 24.9) {
                    this.state.client.publish('/CloudAquarium1/receive', '{"heating":"1","oxygen":' + this.state.oxygen + ',"change":' + this.state.change + ',"cooling":"0","feed":"0","filtration":' + this.state.filtration + '}')
                }
            }
        }
    }


    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' />
                <Text style={styles.functionTitle}>Detailed parameters</Text>
                <View style={styles.addressBox}>
                    <Text style={{ fontSize: 18, flex: 2 }}>BaoTou City</Text>
                    <TouchableOpacity 
                    style={{
                        height: 30,
                        flex: 1,
                        borderRadius: 15,
                        backgroundColor: 'rgba(34,34,34,0.2)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 15
                    }}>
                        <Text style={{ textAlign: 'center' }}>set parameters</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.suggestBox}>
                    <View style={styles.suggestDataBox}>
                        <View style={styles.suggestDataItem}>
                            <Text style={{ color: '#222', fontSize: 24, fontWeight: '900' }}>
                                {this.state.td1}
                            </Text>
                            <Text>
                                expect{'  '+this.state.defaultTemperture}
                            </Text>
                        </View>
                        <View style={styles.suggestDataItem}>
                            {this.state.td2 == 1 ?
                                <Text style={{ color: '#222', fontSize: 24, fontWeight: '900' }}>normal</Text> :
                                <Text style={{ color: '#222', fontSize: 24, fontWeight: '900' }}>Low</Text>
                            }
                            <Text>
                                expect normal
                            </Text>
                        </View>
                        <View style={styles.suggestDataItem}>
                            <Text style={{ color: '#222', fontSize: 24, fontWeight: '900' }}>
                                {this.state.td3}
                            </Text>
                            <Text>
                                expect{'  '+this.state.defaultPH}
                            </Text>
                        </View>
                    </View>
                    <View style={{ flex: 2 }} >
                        {
                            this.state.v
                        }
                    </View>
                    <View style={styles.suggestIconBox}>
                        {this.warningGroup()}
                    </View>

                </View>
                <View style={styles.errorDealBox}>
                    <TouchableOpacity style={styles.errorDealButton}
                        onPress={() => {
                            if (this.state.manual == 0) {
                                ToastAndroid.show('Start Manual', ToastAndroid.SHORT);
                                this.setState({
                                    manual: 1
                                });
                            }
                            else {
                                ToastAndroid.show('Start Auto', ToastAndroid.SHORT);
                                this.setState({
                                    manual: 0
                                })
                            }
                        }}
                    >
                        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '900' }}>manual</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.errorDealButton}
                        onPress={this.postData}
                    >
                        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '900' }}>worning deal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

