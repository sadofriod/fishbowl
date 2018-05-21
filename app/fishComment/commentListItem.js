import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
export default class commentItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View>
                    <Image />
                    <Text>{this.props.username}</Text>
                </View>
                <View>
                    <Text>{this.props.commentContent} </Text>
                </View>
                <View>
                    <TouchableHighlight>
                        <Text>{this.props.fabulous} </Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Text>{this.props.see}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}