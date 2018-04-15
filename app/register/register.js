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
} from './registerStyles';
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
                </View>
                <View style={styles.midArea} >
                    <View style={styles.inputGroup} >
                        <TextInput style={styles.inputItem} underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='Account' />
                        <TextInput style={styles.inputItem} underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='Password' />
                        <TextInput style={styles.inputItem} underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='Confirm Password' />
                        <TextInput style={styles.inputItem} underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='E-mail' />
                    </View>
                    <View style={styles.buttonGroup} >
                        <TouchableHighlight style={styles.buttonItem} onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: '#999' }} >register</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.buttonItem}  onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: '#999' }}>console</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}