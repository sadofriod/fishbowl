import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native';
export default class FishComment extends Component {
    render() {
        return (
            <View>
                <View></View>
                <View>
                    <TextInput placeholder="发表你的看法"/>
                    <TouchableHighlight>
                        <Text>发送</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}