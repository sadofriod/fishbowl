import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import { styles } from './style/BottomComponent';
export default class BottomComponent extends Component {
    constructor(props) {
        super(props);

    }
    // renderItems(rowData) {
    //     return (
    //         <View style={styles.rowBox}>
    //             <View style={styles.rowItem}>
    //                 <Image style={styles.rowImage} source={require('')} />
    //                 <Text style={styles.rowContent}></Text>
    //             </View>
    //             <View style={styles.rowItem}>
    //                 <Image style={styles.rowImage} source={require('')} />
    //                 <Text style={styles.rowContent}></Text>
    //             </View>
    //         </View>
    //     )
    //     console.log(rowData.content);
    // }
    // renderItemsGroup() {
    //     let data = [{
    //         url: '',
    //         url1: '',
    //         content: 'environment detection',
    //         content1: 'Aquarium setting'
    //     }, {
    //         url: '',
    //         url1: '',
    //         content: 'Environmental aquarium',
    //         content1: 'Work Time'
    //     }, {
    //         url: '',
    //         url1: '',
    //         content: 'Alarm processing',
    //         content1: 'Comprehensive setting'
    //     }];
    //     return data.map(rowData => this.renderItems(rowData))
    // }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowBox}>
                    <TouchableHighlight style={styles.rowItem} onPress={() => this.props.navigation.navigate('enviromentDetail')}>
                        <View style={{ flexDirection: 'row' }} >
                            <Image style={styles.rowImage} source={require('../img/Home.png')} />
                            <View style={styles.rowContentBox}>
                                <Text style={styles.rowContentTitle}>Parameters</Text>
                                <Text style={styles.rowContent}>水族箱详细参数</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.rowItem} onPress={() => this.props.navigation.navigate('fishbowlList')}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.rowImage} source={require('../img/fishTank.png')} />
                            <View style={styles.rowContentBox}>
                                <Text style={styles.rowContentTitle}>Fishbowl List</Text>
                                <Text style={styles.rowContent}>水族箱列表</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.rowBox}>
                    <TouchableHighlight style={styles.rowItem} onPress={() => this.props.navigation.navigate('fishComment')}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={styles.rowImage} source={require('../img/table.png')} />
                            <View style={styles.rowContentBox}>
                                <Text style={styles.rowContentTitle}>Community</Text>
                                <Text style={styles.rowContent}>社区讨论</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.rowItem}>
                        <Image style={styles.rowImage} source={require('../img/secWatch.png')} />
                        <View style={styles.rowContentBox}>
                            <Text style={styles.rowContentTitle}>Work Time</Text>
                            <Text style={styles.rowContent}>工作时间</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rowBox}>
                    <View style={styles.rowItem}>
                        <Image style={styles.rowImage} source={require('../img/shield.png')} />
                        <View style={styles.rowContentBox}>
                            <Text style={styles.rowContentTitle}>Alarm Processing</Text>
                            <Text style={styles.rowContent}>警报处理</Text>
                        </View>
                    </View>
                    <View style={styles.rowItem}>
                        <Image style={styles.rowImage} source={require('../img/gear.png')} />
                        <View style={styles.rowContentBox}>
                            <Text style={styles.rowContentTitle}>Comprehensive Setting</Text>
                            <Text style={styles.rowContent}>综合设置</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}