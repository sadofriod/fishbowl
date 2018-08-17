import {
    StyleSheet,
    Dimensions
} from 'react-native';
export const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        height: win.height,
        width: win.width,
        flex:0,
        backgroundColor:'#fff'
    },
    defaultParameterBox:{
        flex:3,
        flexDirection:'row',
        backgroundColor:'#13c4a3'
    },
    defaultParameterImage:{
        height:100,
        width:120,
    },
    defaultParameterImageBox:{
        flex:4,
        justifyContent:'center',
        alignItems:'center',
    },
    defaultParameterWordBox:{
        flex:6,
        justifyContent:'center',
        paddingBottom:40
    },
    defaultParameterWordItem:{
        flex:1,
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
        paddingLeft:30
    },
    newParameterBox:{
        flex:4,
    },
    autoControlGroup:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingBottom:10,
    },
    parameterItem:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:8,
        paddingRight:8,
        paddingBottom:5,
        // borderBottomWidth:1,
        // borderBottomColor:'rgba(34,34,34,.25)'
    },
    parameterItemImageBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    parameterItemImage:{
        height:35,
        width:35,
        padding:5,
        borderWidth:1,
        borderColor:'rgba(34,34,34,.25)',
        borderRadius:5
    },
    parameterItemWord:{
        flex:3,
        color:'rgba(34,34,34,.5)',
        fontSize:14,
        padding:5
    },
    parameterItemInput:{
        flex:1,
        height:30,
        padding:0,
        paddingLeft:3,
        borderWidth:1,
        borderColor:'rgba(34,34,34,.25)',
        borderRadius:4,
    },
    controlItem:{
        flex:1,
        flexDirection:'row',
        paddingLeft:8,
        paddingRight:8,
        
    },
    controlItemBtn:{
        flex:1,
        height:40,
        borderRadius:20,
        backgroundColor:'#13c4a3',
        justifyContent:'center',
        alignItems:'center'
    }
})