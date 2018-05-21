import React, { Component } from 'react';
import {
    View,
    Dimensions,
    TouchableHighlight,
    Text,
    Image,
    StatusBar,
    AsyncStorage
} from 'react-native';
import { styles, win } from './detailMainStyle';
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
// let client = new Paho.MQTT.Client('47.101.60.213', 9000, 'client');
// client.connect({ onSuccess:()=>{
//     console.log('success')
// } , useSSL: false });

export default class Detail extends Component {
    constructor(props) {
        super(props);
        Detail.prototype.caller = () => {
            console.log(this.props.navigation)
            return this.props;
        }
        this.state = {
            client: new Paho.MQTT.Client('47.101.60.213', 9000, 'client1'),
            td1: 0,
            td2: 0.0,
            td3: 7,
        }
        this.state.client.onConnectionLost = (responseObject) => {
            if (responseObject.errorCode !== 0) {
                console.log("onConnectionLost:" + responseObject.errorMessage);
            }
        }
        this.state.client.onMessageArrived = (message) => {
            console.log("onMessageArrived:" + message.payloadString);
        }
        // StatusBar.setBackgroundColor('', true);
        StatusBar.setBarStyle('dark-content', true);
    }
    static navigationOptions = {
        headerRight: <TouchableHighlight style={{
            height: 30,
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 15
        }} onPress={() => Detail.prototype.caller()}>
            <Text>switch fishbowl</Text>
        </TouchableHighlight>,
        headerStyle: {
            height: 30,
            elevation: 0
        }
    }
    warningItems(data) {
        return (
            <View style={{ height: 80, width: win.width / 4 - 12, flex: 0, justifyContent: 'center', alignItems: 'center', margin: 4 }}>
                <View style={{ flex: 0, borderRadius: 8, backgroundColor: '#fff', width: 90, height: 85, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                    <Image style={{ height: 30, borderRadius: 15, width: 30 }} source={require('../../img/normal.png')} />
                    <Text>{data.words}</Text>
                </View>
            </View>
        )
    }
    warningGroup() {
        let dataArray = [{
            words: '高温',
        }, {
            words: '低温',
        }, {
            words: '酸性',
        }, {
            words: '碱性',
        }, {
            words: '喂食',
        }, {
            words: '未开放',
        }, {
            words: '换水',
        }, {
            words: '液位',
        }, {
            words: '未开放',

        },];
        return dataArray.map(data => this.warningItems(data))
    }
    postData = () => {
        this.state.client.publish('/CloudAquarium1/receive', '{"heating":"1","oxygen":"1","change":"0","cooling":"0","feed":"0","filtration":"1"}')
    }
    componentWillUnmount() {
        this.state.client.subscribe("/CloudAquarium1/send", {
            qos: 0, onSuccess: (payload) => {
                console.log(payload);
            }
        })
        // this.state.client.disconnect();
    }
    componentDidMount() {
        this.state.client.subscribe("/CloudAquarium1/send", {
            qos: 0, onSuccess: (payload) => {
                console.log(payload);
            }
        })
        this.state.client.onMessageArrived = (message) => {
            // console.log("onMessageArrived:" + message.payloadString);
            let data = JSON.parse(eval(JSON.stringify(message.payloadString)));
            // console.log(message.payloadString);
            self.setState({
                td1: data.temp,
                td2: data.LiquidLevel,
                td3: data.pH,
            })
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' />
                <Text style={styles.functionTitle}>Detailed parameters</Text>
                <View style={styles.addressBox}>
                    <Text style={{ fontSize: 18, flex: 2 }}>BaoTou City</Text>
                    <TouchableHighlight style={{
                        height: 30,
                        flex: 1,
                        borderRadius: 15,
                        backgroundColor: 'rgba(34,34,34,0.2)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 15
                    }}>
                        <Text style={{ textAlign: 'center' }}>set parameters</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.suggestBox}>
                    <View style={styles.suggestDataBox}>
                        <View style={styles.suggestDataItem}>
                            <Text style={{ color: '#222', fontSize: 24, fontWeight: '900' }}>
                                {this.state.td1}
                            </Text>
                            <Text>
                                expect 25.0℃
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
                                {this.state.td3 }
                            </Text>
                            <Text>
                                expect 7.5
                            </Text>
                        </View>
                    </View>
                    <View style={styles.suggestIconBox}>
                        {this.warningGroup()}
                    </View>
                </View>
                <View style={styles.errorDealBox}>
                    <TouchableHighlight style={styles.errorDealButton}
                        onPress={this.postData}
                    >
                        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '900' }}>worning deal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

