import React, { Component } from 'react';
import {
    View,
    ListView,
    Dimensions,
    StatusBar
} from 'react-native';
import ListItem from './fishbowlListItem';
import testData from './fishbowlListTestData.json'
export default class fishbowlList extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            ds: ds.cloneWithRows(testData)
        }
    }
    static navigationOptions = {
        title:'水族箱列表'
    }
    render() {
        return (
            <View style={{ height: Dimensions.get('window') - 40 }}>
                <StatusBar hidden={true}/>
                <ListView
                    dataSource={this.state.ds}
                    renderRow={
                        (rowData) => <ListItem
                            fishbowlName={rowData.fishbowlName}
                            temperature={rowData.temperature}
                            PH={rowData.PH}
                            feed = {rowData.feed}
                            workTime={rowData.workTime}
                            address={rowData.address}
                        />
                    }
                />
            </View>

        );
    }
}