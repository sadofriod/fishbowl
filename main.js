import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StatusBar
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation'
import MainTop from './app/mainTop/mainTop.js';
import NewsList from './app/tabNavigationPage/tabNav.js';
import SocketTest from './app/socket_test/socket_test.js';
import Enviroment from './app/enviromentListener/MainComponent';
import Detail from './app/enviromentListener/enviromentDetail/detailMain'
export default class Main extends Component {
    static navigationOptions = {
        header:null
    }
    render() {
        return (
            <View style={{height:Dimensions.get('window').height}}>
                <StatusBar hidden={false} />
                {/* <MainTop />
                <View style={{height:Dimensions.get('window').height-57}}>
                    <NewsList />
                </View> */}
                {/* <SocketTest/> */}
                <EnviromentNav />
            </View>
        )
    }
}
const EnviromentNav = StackNavigator({
    enviromentListen: { screen: Enviroment },
    enviromentDetail: { screen: Detail },
})