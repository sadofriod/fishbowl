import React, { Component } from 'react';
import {
    View,
    ListView,
    Dimensions,
    StatusBar
} from 'react-native';
import ListItem from './commentListItem';
export default class CommentListContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ListView
                renderRow={(rowData)=><ListItem />}
            />
        )
    }
}