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
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
        }
    }
    static navigationOptions = {
        header: null
    }
    login = () => {
        let loginFetch = fetch('http://39.105.18.219:3000/login', {
            method: 'POST',
            headers:{
               "Content-type": "application/json",
               "Accept":"application/json"
            } ,
            body: JSON.stringify({
                account: this.state.account,
                password:this.state.password
            })
        })
        loginFetch.then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(data=>{
            console.log(data)
            if (!data.fail&&data.length!=0) {
                this.props.navigation.navigate('Main');
                // ToastAndroid.show('Register Success', ToastAndroid.SHORT);
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' />
                <View style={styles.topArea}>
                    <Image style={styles.header} source={require('../img/defaultHeader.png')} />
                    <Text style={{ fontSize: 40 }} >GeniusK</Text>
                </View>
                <View style={styles.midArea} >
                    <View style={styles.inputGroup} >
                        <TextInput style={styles.inputItem} onChangeText={(text) => {
                            this.setState({
                                account: text
                            })
                        }} underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='Account' />
                        <TextInput style={styles.inputItem} onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }} underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='Password' />
                    </View>
                    <View style={styles.buttonGroup} >
                        <TouchableHighlight style={styles.buttonItem} onPress={() => {this.login() }}>
                            <Text style={{ color: '#999' }} >Login</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.buttonItem} onPress={() => this.props.navigation.navigate('Register')}>
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