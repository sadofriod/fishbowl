import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableHighlight,
    ImageBackground,
    Image,
    StatusBar,
} from 'react-native';
import {
    styles
} from './loginStyle';
export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' />
                <View style={styles.topArea}>
                    <Image style={styles.header} source={require('../img/defaultHeader.png')} />
                    <Text style={{fontSize:40}} >GeniusK</Text>
                </View>
                <View style={styles.midArea} >
                    <View style={styles.inputGroup} >
                        <TextInput style={styles.inputItem} underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='Account' />
                        <TextInput style={styles.inputItem} underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='Password' />
                    </View>
                    <View style={styles.buttonGroup} >
                        <TouchableHighlight style={styles.buttonItem} onPress={() => this.props.navigation.navigate('Main')}>
                            <Text style={{ color: '#999' }} >Login</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.buttonItem}  onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={{ color: '#999' }}>register</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.bottomArea} >
                    <TouchableHighlight style={{ height: 37 }}>
                        <Text>forget password</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}