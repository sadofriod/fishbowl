import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StatusBar
} from 'react-native';
import Top from './topComponent';
import Bottom from './BottomComponent';
import Float from './floatData';
export default class enviroment extends Component {
    constructor(props){
        super(props);
        StatusBar.setBackgroundColor('#13c4a3',true);
    }
    render(){
        return(
            <View>
                <StatusBar/>                
                <Top/>
                <Bottom/>
                <Float/>
            </View>
        )
    }
}