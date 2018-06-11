import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
} from 'react-native';
export const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        height: win.height-50,
        width: win.width,
        flex: 0,
    },
    functionTitle: {
        backgroundColor: '#fff',
        color: '#222',
        fontSize: 36,
        flex: 1,
        fontWeight: '900',
        paddingLeft:15
    },
    addressBox: {
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center'
    },
    suggestBox: {
        flex: 7
    },
    suggestDataBox: {
        flex: 1,
        flexDirection: 'row'
    },
    suggestDataItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    suggestIconBox: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        flexWrap:'wrap',
        flexDirection: 'row',
    },
    errorDealBox: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    errorDealButton: {
        flex:0,
        width:win.width*0.8,
        height:45,
        borderRadius:22.5,
        margin:5,
        backgroundColor:'#13c4a3',
        justifyContent:'center',
        alignItems:'center'
    },
})