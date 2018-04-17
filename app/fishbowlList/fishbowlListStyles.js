import React, { Component } from 'react';
import { 
    Dimensions,
    StyleSheet,
} from 'react-native';
const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container:{
        flex:0,
        height:210,
        width: win.width*0.96,
        margin:win.width*0.02,
        borderRadius:4,
        backgroundColor:'#fff',
        padding:8
    },
    topArea: {
        flex:1
    },
    midArea: {
        flex: 4
    },
    dataArea: {
        flex:1,
        flexDirection:'row',
    },
    workTime: {
        flex:2
    },
    bottomArea: {
        flex:1
    }
});