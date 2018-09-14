import React, { Component } from 'react';
import {
    View,
    ListView,
    Dimensions,
    AsyncStorage,
    StatusBar,
    Text
} from 'react-native';
import ListItem from './fishbowlListItem1';
let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
// import testData from './fishbowlListTestData.json'
export default class fishbowlList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: null
        }
    }
    static navigationOptions = {
        title: '饲养方案'
    }
    componentDidMount() {
        AsyncStorage.getItem('user_id')
            .then(value => {
                return value;
            }).then(data =>{
                console.log(data)
                let getFishList = fetch('http://39.105.18.219:3010/selectAllUserFish', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        userId: data
                    })
                })
                .then(res => {
                    console.log(res)
                    if (res.ok) {
                        return res.json();
                    }
                }).then(data => {
                    console.log(data.result)
                    this.setState({
                        ds: ds.cloneWithRows(data.result)
                    })
                })
            })
        // let self = this;
        
    }
    render() {
        return (
            <View style={{ height: Dimensions.get('window') - 40 }}>
                <StatusBar hidden={true} />
                {this.state.ds ?
                    <ListView
                        dataSource={this.state.ds}
                        renderRow={
                            (rowData) => <ListItem
                                key = {rowData.fish_id}
                                fishId = {rowData.fish_id}
                                fishName={rowData.fish_name}
                                temperature={rowData.default_temperture}
                                PH={rowData.default_ph}
                                feed={rowData.default_feed}
                                workTime={rowData.wfilter}
                                change={rowData.default_change}
                                price={rowData.price}
                                fishhome={rowData.fish_home}
                                navigation={this.props.navigation}
                            />
                        }
                    />
                    :
                    <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >数据加载中</Text>
                }
            </View>

        );
    }
}