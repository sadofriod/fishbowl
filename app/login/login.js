import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    AsyncStorage,
    TouchableOpacity,
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
        let loginFetch = fetch('http://39.105.18.219:3010/login', {
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
            let user_info = data[0];
            console.log(user_info)
            if (!data.fail&&data.length!=0) {
                AsyncStorage.setItem('user_id',user_info.user_id+'');
                AsyncStorage.setItem('user_name',user_info.user_name+'');
                AsyncStorage.setItem('user_root1',user_info.user_is_admin+'');
                AsyncStorage.setItem('user_root2',user_info.user_is_normal+'');
                AsyncStorage.setItem('user_root3',user_info.user_is_business+'');
                this.props.navigation.navigate('Main');
                // ToastAndroid.show('Register Success', ToastAndroid.SHORT);
            }
        });
        console.log(loginFetch);

    }
    componentWillMount(){
        if(AsyncStorage.getItem('user_id')){
            this.props.navigation.navigate('Main');            
        }
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
                        <TouchableOpacity style={styles.buttonItem} onPress={() => {this.login() }}>
                            <Text style={{ color: '#999' }} >Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonItem} onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={{ color: '#999' }}>register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomArea} >
                    <TouchableOpacity style={{ height: 37 }}>
                        <Text>forget password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}