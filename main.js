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
import Enviroment from './app/enviromentListener/MainComponent';
import Detail from './app/enviromentListener/enviromentDetail/detailMain'
import FishbowlList from './app/fishbowlList/fishbowlList.js';
import fishbowlSet from './app/fishbowlList/fishbowlSet'
import CommentListContainer from './app/fishComment/fishCommentMain'
export default class Main extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{ height: Dimensions.get('window').height }}>
                <StatusBar hidden={false} />
                <EnviromentNav />
            </View>
        )
    }
}
const EnviromentNav = StackNavigator({
    enviromentListen: { screen: Enviroment },
    enviromentDetail: { screen: Detail },
    fishbowlList: { screen: FishbowlList },
    fishbowlSet: { screen:fishbowlSet },
    fishComment: { screen: CommentListContainer }
})