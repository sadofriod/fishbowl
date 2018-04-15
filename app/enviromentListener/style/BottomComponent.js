import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
} from 'react-native';
const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        height: win.height * 0.5,
        marginTop:win.height*0.08,
    },
    rowBox: {
        height: 60,
        flex: 0,
        flexDirection: 'row',
        width: win.width,
        backgroundColor: '#fff',
    },
    rowItem: {
        flex: 1,
        flexDirection: 'row',
        width: win.width * 0.49,
        justifyContent:'center',
        borderRightWidth:1,
        borderRightColor:'rgba(34,34,34,.15)',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'rgba(34,34,34,.15)',
        paddingLeft:15,
        paddingRight:15,
    },
    rowContentBox: {
        flex:4,
        justifyContent:'center',
        alignItems:'center'
    },
    rowContentTitle: {
        fontSize:14,
        fontWeight:'900',
        textAlign:'left'
    },
    rowContent:{
        fontSize:12,
        textAlign:'left',
        color:'#999'
    },
    rowImage: {
        height:25,
        width:25,
        borderRadius:15,
        marginRight:10
    },
})