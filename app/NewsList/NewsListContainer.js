import React, { Component } from 'react';
import {
    ListView,Dimensions,View
} from 'react-native';
import NewsListItmes from './NewListItem';
import testData from './testData.json';
export default class NewList extends Component {
    constructor(props) {
        super(props);
        let td = testData;
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(td),
        }
    }
    render() {
        const i=0;
        return (
            <View style={{height:Dimensions.get('window').height-87}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData,sectionID,rowID) => <NewsListItmes
                        key={i}
                        username={rowData.username}
                        title={rowData.title}
                        imgSource={rowData.imgSource}
                        content={rowData.content}
                    />}
                />
            </View>
        )

    }
}