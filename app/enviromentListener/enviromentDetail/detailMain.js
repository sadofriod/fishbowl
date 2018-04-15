import React, { Component } from 'react';
import {
    View,
    Dimensions,
    TouchableHighlight,
    Text,
    Image,
    StatusBar
} from 'react-native';
import { styles, win } from './detailMainStyle';
export default class Detail extends Component {
    constructor(props) {
        super(props);
        Detail.prototype.caller = () => {
            console.log(this.props.navigation)
            return this.props;
        }
        // StatusBar.setBackgroundColor('', true);
        StatusBar.setBarStyle('dark-content', true);
    }
    static navigationOptions = {
        headerRight: <TouchableHighlight style={{
            height: 30,
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 15
        }} onPress={() => Detail.prototype.caller()}>
            <Text>switch fishbowl</Text>
        </TouchableHighlight>,
        headerStyle: {
            height: 30,
            elevation: 0
        }
    }
    warningItems(data) {
        return (
            <View style={{height:80,width:win.width/4-12,flex:0,justifyContent:'center',alignItems:'center',margin:4}}>
                <View style={{flex:0,borderRadius:8,backgroundColor:'#fff',width:90,height:85,justifyContent:'center',alignItems:'center',padding:5}}>
                    <Image style={{height:30,borderRadius:15,width:30}} source={require('../../img/normal.png')}/>
                    <Text>{data.words}</Text>
                </View>
            </View>
        )
    }
    warningGroup() {
        let dataArray = [{
            words:'高温',
        },{
            words:'低温',
        },{
            words:'酸性',
        },{
            words:'碱性',
        },{
            words:'喂食',
        },{
            words:'未开放',
        },{
            words:'换水',
        },{
            words:'液位',
        },{
            words:'未开放',
            
        },];
        return dataArray.map(data =>this.warningItems(data))
    }
    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' />
                <Text style={styles.functionTitle}>Detailed parameters</Text>
                <View style={styles.addressBox}>
                    <Text style={{ fontSize: 18, flex: 2 }}>BaoTou City</Text>
                    <TouchableHighlight style={{
                        height: 30,
                        flex: 1,
                        borderRadius: 15,
                        backgroundColor: 'rgba(34,34,34,0.2)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingRight: 15
                    }}>
                        <Text style={{ textAlign: 'center' }}>set parameters</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.suggestBox}>
                    <View style={styles.suggestDataBox}>
                        <View style={styles.suggestDataItem}>
                            <Text style={{ color: '#222', fontSize: 24, fontWeight: '900' }}>
                                25.0℃
                            </Text>
                            <Text>
                                expect value 25.0℃
                            </Text>
                        </View>
                        <View style={styles.suggestDataItem}>
                            <Text style={{ color: '#222', fontSize: 24, fontWeight: '900' }}>
                                12.08%
                            </Text>
                            <Text>
                                expect value 12.08%
                            </Text>
                        </View>
                        <View style={styles.suggestDataItem}>
                            <Text style={{ color: '#222', fontSize: 24, fontWeight: '900' }}>
                                7.5 g/ml
                            </Text>
                            <Text>
                                expect value 7.5 g/ml
                            </Text>
                        </View>
                    </View>
                    <View style={styles.suggestIconBox}>
                        {this.warningGroup()}
                    </View>
                </View>
                <View style={styles.errorDealBox}>
                    <TouchableHighlight style={styles.errorDealButton}>
                        <Text style={{ color: '#FFF', fontSize: 18, fontWeight: '900' }}>worning deal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )

    }
}

