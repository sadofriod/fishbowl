import React, { Component } from 'react';
import {
    View,
    ListView,
    Dimensions,
    StatusBar
} from 'react-native';
import ListItem from './commentListItem';
import testData from './testData.json'
export default class CommentListContainer extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2})
        this.state={
            ds:ds.cloneWithRows(testData),
        }
    }
    
    render() {
        return (
            <ListView
                dataSource={this.state.ds}
                renderRow={(rowData)=><ListItem 
                    username={rowData.username}
                    commentContent={rowData.commentContent}
                    fabulous={rowData.fabulous}
                    see={rowData.see}
                />}
            />
        )
    }
}