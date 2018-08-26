import React, { Component } from 'react';
import {
    View,
    Text,
    WebView
} from 'react-native';
import CommentListContainer from './commentListContainer'
// import { styles } from './styles/mainStyles';
export default class FishComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment:'',
            data:{},
            submitFlag:0,
        }
    }
    static navigationOptions = {
        title: '测试一水族箱的社区'
    }
    
    render() {
        return (
                
                <CommentListContainer data={this.state.data}  submitFlag={this.state.submitFlag}/>
        )
    }
}