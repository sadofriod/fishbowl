import {
    StyleSheet,
    Dimensions
} from 'react-native';
const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container:{
        flex:1,
        borderBottomWidth:1,
        borderColor:'rgba(34,34,34,.40)',
        paddingRight:15,
        paddingLeft:15,
        paddingTop:8,
        paddingBottom:8,
        backgroundColor:'#fff',
    },
    commentHead:{
        flex:1,
        flexDirection:'row'
    },
    username:{
        fontWeight:'bold',
        fontSize:14,
    },
    commentContent:{
        flex:4
    },
    commentContentWords:{
        flex:1,
        fontSize:18,
        padding:10,
        paddingLeft:50
    },
    commentToolsGroup:{
        flex:1,
        flexDirection:'row'
    },
    commentTool:{
        flex:1
    }
})