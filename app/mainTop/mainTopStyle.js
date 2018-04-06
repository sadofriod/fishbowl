import React, { Component } from 'react';
import { 
    Dimensions,
    StyleSheet,
} from 'react-native';
const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container:{
        height: win.height,
        width: win.width,
    },
    topArea: {
        flex: 0,
        flexDirection:'row',
        width: win.width,
        height: 57,
        backgroundColor:'#d43d3d',
    
    },
    topInput: {
        flex:0,
        width:win.width*0.65,
        borderBottomColor:'#fff',
        color:'#fff',
        borderRadius: 5,
        
    },
    topImage:{
        flex:0,
        borderRadius:17.5,
        height:35,
        width:35,       
    },
    topImageBox: {
        flex:0,
        flexDirection:'row',
        width:win.width*0.175,
        height:57,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0)',              
    },
    topButtonBox: {
        flex:0,
        flexDirection:'row',
        width:win.width*0.175,
        height:57,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topButtonText: {
        borderWidth:1,
        borderRadius:5,
        borderColor:'#fff',
        padding:5,
    }
})