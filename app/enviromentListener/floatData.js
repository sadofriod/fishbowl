import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    AsyncStorage,
} from 'react-native';
// import init from 'react_native_mqtt';
import { styles } from './style/floatDataStyle';
import io from 'socket.io-client'
// init({
//     size: 10000,
//     storageBackend: AsyncStorage,
//     defaultExpires: 1000 * 3600 * 24,
//     enableCache: true,
//     reconnect: true,
//     sync : {
//     }
//   });
   
//   function onConnect() {
//     console.log("链接成功");
//   }
   
//   function onConnectionLost(responseObject) {
//     if (responseObject.errorCode !== 0) {
//       console.log("onConnectionLost:"+responseObject.errorMessage);
//     }
//   }
   
//   function onMessageArrived(message) {
//     console.log("onMessageArrived:"+message.payloadString);
//   }
   
//   const client = new Paho.MQTT.Client('120.24.96.204', 1883, 'client');
//   client.onConnectionLost = onConnectionLost;
//   client.onMessageArrived = onMessageArrived;
//   client.connect({ onSuccess:onConnect, useSSL: true });
const socket = io.connect('http://112.74.165.209:3000/test');
console.log(socket)
// socket.emit('testPost',{td:'test success'});
// socket.on('testPost',(data)=>{
//     console.log(data);
// });
export default class floatData extends Component {
    constructor(props){
        // socket.emit('testPost',{td:1});        
        super(props);
        this.state = {
            td1:0,
            td2:0.0,
            td3:7,
        }
        
    }
    componentDidMount(){
        // console.log(this.state);
        let self = this;
        let test = socket.on('testPost',(data)=>{
            self.setState({
                td1:data.td1,
                td2:data.td2,
                td3:data.td3,
            })
        })
        // console.log(test);
    }
    shouldComponentUpdate(){
        let self = this;
        let test = socket.on('testPost',(data)=>{
            self.setState({
                td1:data.td1,
                td2:data.td2,
                td3:data.td3,
            })
        })
        return true;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.floatItems}>
                    <Image style={{height:25,width:25,borderRadius:12.5}} source={require('../img/thermometer.png')}/>
                    <Text style={{color:'#222',fontWeight:'900',fontSize:18}}>{this.state.td1}℃</Text>
                    <Text>Temperature</Text>
                </View>
                <View style={styles.floatItems}>
                    <Image style={{height:25,width:25,borderRadius:12.5}} source={require('../img/liquid.png')}/>
                    <Text style={{color:'#222',fontWeight:'900',fontSize:18}}>{this.state.td2}%</Text>
                    <Text>Turbidity</Text>
                </View >
                <View style={styles.floatItems}>
                    <Image style={{height:25,width:25,borderRadius:12.5}} source={require('../img/PH.png')}/>
                    <Text style={{color:'#222',fontWeight:'900',fontSize:18}}>{this.state.td3}</Text>
                    <Text>PH</Text>
                </View>
            </View>
        )
    }
}