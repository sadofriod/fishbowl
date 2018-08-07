import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    AsyncStorage,
} from 'react-native';
import init from 'react_native_mqtt';
import { styles } from './style/floatDataStyle';
import io from 'socket.io-client'
init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {
    }
});
export default class floatData extends Component {
    constructor(props) {
        // socket.emit('testPost',{td:1});        
        super(props);
        this.state = {
            td1: 0,
            td2: 0.0,
            td3: 7,
            client: new Paho.MQTT.Client('47.93.253.168', 9000, 'client')
        }

        this.state.client.onConnectionLost = (responseObject) => {
            if (responseObject.errorCode !== 0) {
                console.log("onConnectionLost:" + responseObject.errorMessage);
            }
        }
        this.state.client.onMessageArrived = (message) => {
            console.log("onMessageArrived:" + message.payloadString);
        }
    }
    componentDidMount() {
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
                td2: data.LiquidLevel,
                td3: data.pH,
            })
        }
    }
    // componentWillUpdate(){
    //     this.state.client.subscribe("/CloudAquarium1/send", {
    //         qos: 0, onSuccess: (payload) => {
    //             console.log(payload);
    //         }
    //     })
    // }
    componentWillUnmount() {
        // this.state.client.disconnect();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.floatItems}>
                    <Image style={{ height: 25, width: 25, borderRadius: 12.5 }} source={require('../img/thermometer.png')} />
                    <Text style={{ color: '#222', fontWeight: '900', fontSize: 18 }}>{this.state.td1}℃</Text>
                    <Text>Temperature</Text>
                </View>
                <View style={styles.floatItems}>
                    <Image style={{ height: 25, width: 25, borderRadius: 12.5 }} source={require('../img/liquid.png')} />
                    {this.state.td2 == 1 ?
                        (<Text style={{ color: '#222', fontWeight: '900', fontSize: 18 }}>normal</Text>):
                        <Text style={{ color: '#222', fontWeight: '900', fontSize: 18 }}>low</Text>
                    }
                    <Text>Turbidity</Text>
                </View >
                <View style={styles.floatItems}>
                    <Image style={{ height: 25, width: 25, borderRadius: 12.5 }} source={require('../img/PH.png')} />
                    <Text style={{ color: '#222', fontWeight: '900', fontSize: 18 }}>{this.state.td3}</Text>
                    <Text>PH</Text>
                </View>
            </View>
        )
    }
}