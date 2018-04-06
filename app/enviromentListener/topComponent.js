import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    Dimensions,
    StatusBar
} from 'react-native';
import io from 'socket.io-client';
import { styles } from './style/topComponentStyle';
export default class topComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            store: 0,
            comment: 'Bad'
        }
        this.commentArray = commentArray = ['Bad', 'Normal', 'Good', 'Perfect'];
        this.socket = {
            io:io.connect('http://112.74.165.209/test'),
        }
    }
    componentDidMount() {
        let i = 0;
        this.timer = setInterval(() => {
            this.setState({
                store: i++
            })
            if (this.state.store > 99) {
                clearInterval(this.timer);
            }
        }, 20)
    }
    componentWillUpdate() {
        switch (this.state.store) {
            case 51:
                this.setState({ comment: this.commentArray[0] });
                break;
            case 61:
                this.setState({ comment: this.commentArray[1] });
                break;
            case 81:
                this.setState({ comment: this.commentArray[2] });
                break;
            case 91:
                this.setState({ comment: this.commentArray[3] });
                break;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.navigatorBar}></View>
                    <Text style={styles.headerTitle}>Enviroment</Text>
                    <View style={styles.AddressBox}>
                        <Image style={{height:18,width:18}} source={require('../img/address.png')}/>
                        <Text style={styles.Address}>
                            Address
                        </Text>
                    </View>
                </View>
                <View style={styles.topMain}>
                    <Text style={styles.topMainTitle}>Real Time Monitoring</Text>
                    <View style={styles.topMainContent}>
                        <Text style={styles.topMainContentStroe}>{this.state.store}</Text>
                        <Text style={styles.stroeComment}>{this.state.comment}</Text>
                        <TouchableHighlight style={styles.topMainButton}>
                            <Text style={{ color: 'rgba(255,255,255,.75)', fontSize: 12 }}>Refresh</Text>
                        </TouchableHighlight>
                    </View>

                </View>
            </View>
        )

    }
}