import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ToastAndroid,
    AsyncStorage,
    Dimensions,
} from 'react-native';
import { styles } from './fishbowlSetStyles'
export default class listItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: 0,
            temperature: 0.00,
            PH: 7.00,
            change: 0,
            defaultFeed: '',
            defaultTemp: '',
            defaultPH: '',
            defaultChage: '',
            user_id: '',
            fishbowl_id: ''
        }
    }
    componentWillMount() {

    }
    static navigationOptions = {
        title: '水族箱参数设置',
        headerStyle: {
            backgroundColor: '#13c4a3',
            // height:40
            elevation: 0,
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(255,255,255,.25)'
        },
        headerTitleStyle: {
            color: '#fff'
        },
        headerBackTitleStyle: {
            color: '#fff'
        },
        headerTintColor: '#fff'
    }
    componentDidMount() {
        AsyncStorage.getItem('user_id').then(data => {
            console.log(data)
            this.setState({ user_id: data })
        }).then(() => {
            AsyncStorage.getItem('fishbowl_id').then(data => {
                console.log(data)
                this.setState({ fishbowl_id: data })
            }).then(() => {
                let getDefautParameter = fetch('http://39.105.18.219:3010/getDefaultParameter', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        fishbowl_id: this.state.fishbowl_id,
                        user_id: this.state.user_id
                    })
                })
                    .then(res => {
                        if (res.ok) {
                            return res.json();
                        }
                    }).then(data => {
                        let defaultData = JSON.parse(data);
                        console.log(defaultData)
                        this.setState({
                            defaultChage: defaultData[0].expect_change,
                            defaultFeed: defaultData[0].expect_feed,
                            defaultPH: defaultData[0].expect_ph,
                            defaultTemp: defaultData[0].expect_temperture,
                            switchTopic: defaultData[0].fishbowl_topic
                        })
                    });
            })
        })
    }
    defaultParameterGroup = () => {
        let defaultParameter = [
            {
                name: '温度:',
                value: this.state.defaultTemp + '  ℃',
            }, {
                name: 'PH:',
                value: this.state.defaultPH + '  g/ml',
            }, {
                name: '喂食次数:',
                value: this.state.defaultFeed + '  (一日)',
            }, {
                name: '换水时间:',
                value: this.state.defaultChage + '  (一周)',
            },
        ];
        return defaultParameter.map((data, index) => {
            return (
                <View key={index} style={styles.defaultParameterWordItem}>
                    <Text style={{ color: '#fff', marginRight: 5 }} >{data.name}</Text>
                    <Text style={{ color: '#fff' }}>{data.value}</Text>
                </View>
            )
        })
    }
    setParameterGroup = () => {
        let setArray = [{
            name: '温度',
            value: this.state.temperature,
            parameter: 'temperature',
            imageUrl: require('../img/thermometer.png')
        }, {
            name: 'PH',
            value: this.state.PH,
            parameter: 'PH',
            imageUrl: require('../img/PH.png')
        }, {
            name: '喂食次数 (一日)',
            value: this.state.feed,
            parameter: 'feed',
            imageUrl: require('../img/feed_in.png')
        }, {
            name: '换水次数 (一周)',
            value: this.state.change,
            parameter: 'change',
            imageUrl: require('../img/secWatch.png')
        }
        ];
        return setArray.map((data, index) => {
            return (
                <View key={index} style={styles.parameterItem} >
                    <View style={styles.parameterItemImageBox} >
                        <Image style={styles.parameterItemImage} source={data.imageUrl} />
                    </View>
                    <Text style={styles.parameterItemWord}>{data.name}</Text>
                    <TextInput
                        style={styles.parameterItemInput}
                        onChangeText={
                            (text) => {
                                let temp = data.parameter;
                                this.setState({
                                    [temp]: text,
                                });
                            }
                        }
                        underlineColorAndroid='rgba(0,0,0,0)'
                    ></TextInput>
                </View>
            )
        })
    }
    uploadNewParameter = () => {
        console.log(this.state);
        let uploadNewParameter = fetch('http://39.105.18.219:3010/uploadNewParameter', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                fishbowl_id:this.state.fishbowl_id,
                change: this.state.change,
                feed: this.state.feed,
                PH: this.state.PH,
                temperature: this.state.temperature
            })
        });
        uploadNewParameter.then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => {
            if (data.success == 1) {
                this.setState({
                    defaultChage: this.state.change,
                    defaultFeed: this.state.feed,
                    defaultPH: this.state.PH,
                    defaultTemp: this.state.temperature
                })
                ToastAndroid.show('Reset Success', ToastAndroid.SHORT);
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.defaultParameterBox}>
                    <View style={styles.defaultParameterWordBox}>
                        <View style={{ flex: 1, paddingLeft: 30, justifyContent: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 24, }}>现行参数：</Text>
                        </View>
                        <View style={{ flex: 3 }}>{this.defaultParameterGroup()}</View>
                    </View>
                    <View style={styles.defaultParameterImageBox}>
                        <Image style={styles.defaultParameterImage} source={require('../img/fishTank.png')} />
                    </View>
                </View>
                <View style={styles.newParameterBox}>
                    {this.setParameterGroup()}
                </View>
                <View style={styles.autoControlGroup}>
                    <View style={styles.controlItem}>
                        <TouchableOpacity style={styles.controlItemBtn} onPress={
                            this.uploadNewParameter
                        }>
                            <Text style={{ color: '#fff' }}>提交修改</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlItem}>
                        <TouchableOpacity style={styles.controlItemBtn}>
                            <Text style={{ color: '#fff' }}>自动控制</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlItem}>
                        <TouchableOpacity style={styles.controlItemBtn}>
                            <Text style={{ color: '#fff' }}>切换设备</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}