import React, { Component } from 'react';
import {
    WebView,
    Dimensions,
    View
} from 'react-native';
import io from 'socket.io-client';
export default class SocketTest extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {

    }
    render() {
        return (
            <View style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>
                <WebView
                    style={{width:'100%',height:'100%'}}
                    source={{ uri: 'http://112.74.165.209:3010/resume/vr_test.html' }}
                    onLoad={console.log('load')}
                />
            </View>

        )
    }
}