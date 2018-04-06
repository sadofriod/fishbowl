import React, { Component } from 'react';
import { 
    Dimensions,
    StyleSheet,
} from 'react-native';
const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container:{
        height:win.height*0.42,
        width:win.width,
        backgroundColor:'#13c4a3',
        
    },
    header:{
        flex:0,
        flexDirection: 'row',
        height: 35,
        width: win.width
    },
    navigatorBar:{
        flex:1
    },
    headerTitle:{
        flex:2,
        textAlign:'center',
        color:'#fff',
        fontSize:18,
        
        justifyContent:'center',
    },
    Address:{
        color:'rgba(255,255,255,.70)',
        justifyContent:'center',
    },
    AddressBox:{
        flex:1,
        flexDirection:'row',
        
        justifyContent:'center',
        alignItems:'center'
    },
    topMain:{
        flex:1,
        alignItems:'center'
    },
    topMainTitle:{
        flex:1,
        width:win.width,
        textAlign:'left',
        color:'rgba(255,255,255,.70)',
        paddingLeft:15
    },
    topMainContent:{
        flex:6,
        width:win.width,
        marginTop:20,
        // justifyContent:'center',
        alignItems:'center'
    },
    topMainContentStroe: {
        fontSize:60,
        color:'#fff'
    },
    topMainButton:{
        borderRadius:12.5,
        borderWidth:1,
        borderColor:'rgba(255,255,255,.50)',
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        height:25,
        width:win.width*0.2,
        marginTop:8
    },
    stroeComment:{
        fontSize:18,
        color:'#fff'
    }
})