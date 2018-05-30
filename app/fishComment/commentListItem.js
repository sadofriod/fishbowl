import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import { styles } from './styles/commentListItemStyles';
export default class commentItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.commentHead}>
                    <Image style={{height:35,width:35,borderRadius:17.5,marginRight:20}} source={require('../img/gear.png')}/>
                    <Text style={styles.username}>{this.props.username}</Text>
                </View>
                <View style={styles.commentContent}>
                    <Text style={styles.commentContentWords}>{this.props.commentContent} </Text>
                </View>
                <View style={styles.commentToolsGroup}>
                    <Text style={{flex:2}} >time</Text>
                    <TouchableHighlight style={styles.commentTool}>
                        <Text style={{flex:1}} >fabulous:{this.props.fabulous} </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.commentTool}>
                        <Text style={{flex:1}}>see:{this.props.see}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}