import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
} from 'react-native';
import { styles } from './style/floatDataStyle'
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