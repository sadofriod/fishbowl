import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import CommentListContainer from './commentListContainer'
import { styles } from './styles/mainStyles';
export default class FishComment extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title:'测试一水族箱的社区'
    }
    render() {
        return (
            <View style={styles.container} >
                <CommentListContainer/>
                <View style={styles.speak}>
                    <TextInput style={styles.commentInput} placeholder="发表你的看法"/>
                    <TouchableHighlight style={styles.submitButton}>
                        <Text>发送</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}