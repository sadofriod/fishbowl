import React, { Component } from 'react';
import { 
    Dimensions,
    StyleSheet,
} from 'react-native';
const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    itemBox:{
        // borderBottomWidth:1,
        // borderBottomColor:'rgba(34,34,34,.25)',
        paddingLeft:8,
        paddingRight:8,
        marginBottom:12,
        backgroundColor:'#fff',
        flex:1,
        
    },
    userInfo: {
        height:30,
        width:win.width-16,
        flex:0,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'rgba(34,34,34,.25)',
    },
    userHead: {
        height:20,
        borderRadius:10,
        width:20,
        marginRight:8,
        borderWidth:1,
        borderColor:'rgba(34,34,34,.5)'
    },
    contentImgBox: {
        width: win.width,
        flex:0,
        flexDirection:'row',
        overflow:'hidden'        
    },
    titleText: {
        fontWeight:'900',
        fontSize:24,
    }
})