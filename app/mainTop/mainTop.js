import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    StatusBar,
    Button
} from 'react-native';
import { styles } from './mainTopStyle';
export default class MainTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            display: 'none'
        }
    }
    render() {
        return (
            <View style={styles.topArea}>
                <StatusBar hidden={true} />
                <View style={styles.topImageBox}>
                    <Image style={styles.topImage} source={require('../img/header.jpg')} />
                </View>
                <TextInput style={styles.topInput} placeholderTextColor='#fff' placeholder='Search something ....' underlineColorAndroid='#FFF' />
                <View style={styles.topButtonBox}>
                    <TouchableHighlight style={styles.topButtonText} onPress={() => {
                        this.setState({
                            height: 100,
                            width: 120,
                            display: 'flex'
                        })
                    }}>
                        <Text style={{ color: '#fff' }}>Search</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
// class Menu extends Component {


//     render() {
//         return (

//         )

//     }
// }