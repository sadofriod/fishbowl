import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
} from 'react-native';
import { styles } from './fishbowlListStyles'
export default class listItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                AsyncStorage.setItem('fish_id',this.props.fishId+'',err=>console.log(err))
                this.props.navigation.navigate('fishPassage')
            }} >
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
                            <Text style={styles.dataWord}>换水间隔:{this.props.change}</Text>
                            <Text style={styles.dataWord}>PH:{this.props.PH}</Text>
                        </View>
                    </View>
                    <View style={styles.bottomArea}>
                        <Text>产地:{this.props.fishhome + '         '}</Text>
                        <Text>价格:{this.props.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )

    }
}