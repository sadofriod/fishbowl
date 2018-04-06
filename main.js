import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StatusBar
} from 'react-native';
import MainTop from './app/mainTop/mainTop.js';
import NewsList from './app/tabNavigationPage/tabNav.js';
import SocketTest from './app/socket_test/socket_test.js';
import Enviroment from './app/enviromentListener/MainComponent';
export default class Main extends Component {
    render() {
        return (
            <View>
                <StatusBar hidden={false}/>
                {/* <MainTop />
                <View style={{height:Dimensions.get('window').height-57}}>
                    <NewsList />
                </View> */}
                {/* <SocketTest/> */}
                <Enviroment/>
            </View>
        )
    }
}