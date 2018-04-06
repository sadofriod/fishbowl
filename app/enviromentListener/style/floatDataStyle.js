import React, { Component } from 'react';
import { 
    Dimensions,
    StyleSheet,
} from 'react-native';
const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container:{
        flex:0,
        flexDirection:'row',
        position:'absolute',
        top:win.height*0.36,
        left:win.width*0.05,
        width:win.width*0.90,
        height:win.height*0.12,
        borderRadius: 15,
        backgroundColor:'#fff',
        elevation:4,
    },
    floatItems:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})