import React, { Component } from 'react';
import { 
    Dimensions,
    StyleSheet,
} from 'react-native';
const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container:{
        height:win.height-80,
        width:win.width
    },
    speak:{
        position:'absolute',
        bottom:0,
        flex:0,
        flexDirection:'row',
        height:60,
        width:win.width,
        backgroundColor:'#fff'
    },
    submitButton:{
        borderWidth:1,
        borderRadius:5,
        padding:5,
        margin:8,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    commentInput:{
        flex:5,
        margin:8
    }
})