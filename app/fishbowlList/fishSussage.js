import React, { Component } from 'react';
import {
    View,
    ListView,
    Dimensions,
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
        // let self = this;
        let getFishList = fetch('http://39.105.18.219:3000/selectAllFishSu', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: ''
        });
        getFishList.then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => {
            console.log(data.result);
            this.setState({
                ds: ds.cloneWithRows(data.result)
            })
        })
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
                                fishbowlName={rowData.name}
                                temperature={rowData.tem}
                                PH={rowData.ph}
                                feed={rowData.feed}
                                workTime={rowData.wfilter}
                                // address={rowData.wexchange}
                                navigation={this.props.navigation}
                            />
                        }
                    />
                    :
                    <Text style={{flex:1,justifyContent:'center',alignItems:'center'}} >数据加载中</Text>
                }
            </View>

        );
    }
}