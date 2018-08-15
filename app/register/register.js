import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableHighlight,
    ToastAndroid,
    Image,
    StatusBar,
} from 'react-native';
import {
    styles
} from './registerStyles';
import ajax from '../ajax/ajax'
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            account: '',
            password: '',
        }
    }
    static navigationOptions = {
        header: null
    }
    register =()=>{
        let registerFetch = fetch('http://39.105.18.219:3000/register', {
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
        registerFetch.then( data=>{
            console.log(data);
            if (data.success == 1) {
                this.props.navigation.navigate('Login');
                ToastAndroid.show('Register Success', ToastAndroid.SHORT)
            }
        })
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
                        <TextInput style={styles.inputItem} onChangeText={(text) => {
                            this.setState({
                                account: text
                            })
                        }}  underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='Account' />
                        <TextInput style={styles.inputItem}  onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }} underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='Password' />
                        <TextInput style={styles.inputItem}  onChangeText={(text) => {
                            this.setState({
                                confirmPassword: text
                            })
                        }} underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='Confirm Password' />
                        <TextInput  onChangeText={(text) => {
                            this.setState({
                                email: text
                            })
                        }} style={styles.inputItem} underlineColorAndroid='rgba(34,34,34,0.15)' placeholderTextColor='rgba(34,34,34,0.35)' placeholder='E-mail' />
                    </View>
                    <View style={styles.buttonGroup} >
                        <TouchableHighlight style={styles.buttonItem} onPress={this.register}>
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