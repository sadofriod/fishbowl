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
                <StatusBar hidden={false} />
                <View style={styles.topArea}>
                    <Image style={styles.header} source={require('../img/defaultHeader.png')} />
                </View>
                <View style={styles.midArea} >
                    <View style={styles.inputGroup} >
                        <TextInput style={styles.inputItem} placeholder='Account' />
                        <TextInput style={styles.inputItem} placeholder='Password' />
                    </View>
                    <View style={styles.buttonGroup} >
                        <TouchableHighlight style={styles.buttonItem}>
                            <Text>Login</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.buttonItem}>
                            <Text>register</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.bottomArea} >
                    <TouchableHighlight style={{height:37}}>
                        <Text>forget password</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}