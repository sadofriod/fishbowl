import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import io from 'socket.io-client';
const socket1 = io.connect('http://112.74.165.209/test1');
const socket = io.connect('http://112.74.165.209/test');
export default class SocketTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testData: 'this is a words for test',
        }
        socket.emit('testPost',{
            td:'sss'
        })
        socket.on('testPost',(data)=>{
            console.log(data.td)
        })
        console.log(socket);
    }
    componentDidMount() {
        socket1.on('thisPost',(data)=>{
            console.log(data.test)
        })
    }
    render() {
        return (
            <View style={{ width: 300 }}>
                <Text style={{ fontSize: 20 }}>{this.state.testData}</Text>
                <TextInput ></TextInput>
                {/* <Button title='Change' /> */}
            </View>
        )
    }
}