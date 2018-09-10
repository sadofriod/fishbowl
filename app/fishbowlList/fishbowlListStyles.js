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
        paddingTop:8,
        paddingLeft:15,
        paddingRight:15,       
        elevation:5
    },
    topArea: {
        flex:1,
        borderBottomWidth: 1, 
        borderColor: 'rgba(34,34,34,.25)'
    },
    midArea: {
        flex: 4,
        paddingTop:5,
        borderBottomWidth: 1, 
        borderColor: 'rgba(34,34,34,.25)'
    },
    dataArea: {
        flex:1,
        flexDirection:'row',
    },
    dataWord: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'left',
        fontSize:18
    },
    workTime: {
        flex:2,
        flexDirection:'row'
    },
    bottomArea: {
        flexDirection:'row',
        flex:1,
        paddingTop:5,        
    }
});