import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { styles } from './fishbowlListStyles'
export default class listItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('fishbowlSet')} >
                <View style={styles.container} >
                    <View style={styles.topArea}>
                        <Text>水族名:{this.props.fishName}</Text>
                    </View>
                    <View style={styles.midArea}>
                        <View style={styles.dataArea}>
                            <Text style={styles.dataWord} >温度:{this.props.temperature}℃</Text>
                            <Text style={styles.dataWord}>喂食间隔:{this.props.feed}</Text>
                        </View>

                        <View style={styles.workTime}>
                            <Text style={styles.dataWord}>换水间隔:{this.props.change}h</Text>
                            <Text style={styles.dataWord}>PH:{this.props.PH}</Text>
                        </View>
                    </View>
                    <View style={styles.bottomArea}>
                        <Text>产地:{this.props.fishhome+'         '}</Text>
                        <Text>价格:{this.props.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )

    }
}