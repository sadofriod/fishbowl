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
  const socket = io('ws://120.24.96.204:1883', {jsonp: false, transports: ['websocket']});
  console.log(socket)    
  export default class floatData extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.floatItems}>
                    <Image style={{height:25,width:25,borderRadius:12.5}} source={require('../img/thermometer.png')}/>
                    <Text style={{color:'#222',fontWeight:'900',fontSize:18}}>25℃</Text>
                    <Text>Temperature</Text>
                </View>
                <View style={styles.floatItems}>
                    <Image style={{height:25,width:25,borderRadius:12.5}} source={require('../img/liquid.png')}/>
                    <Text style={{color:'#222',fontWeight:'900',fontSize:18}}>12.08%</Text>
                    <Text>Turbidity</Text>
                </View >
                <View style={styles.floatItems}>
                    <Image style={{height:25,width:25,borderRadius:12.5}} source={require('../img/PH.png')}/>
                    <Text style={{color:'#222',fontWeight:'900',fontSize:18}}>7.5g/ml</Text>
                    <Text>PH</Text>
                </View>
            </View>
        )
    }
}