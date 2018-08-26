import React, { Component } from 'react';
import {
    View,
    ListView,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    StatusBar
} from 'react-native';
import ListItem from './commentListItem';
import { styles } from './styles/mainStyles';
let getComment;
export default class CommentListContainer extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let commentData = [];
        this.state = {
            commentData: commentData,
            ds: ds.cloneWithRows(commentData),
            comment: '',
            submitSuccess: 0,
        }
    }
    componentDidMount() {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        getComment = () => fetch('http://39.105.18.219:3000/getAllComment', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: ''
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(data => {
                console.log(data.result);
                this.setState({
                    ds: ds.cloneWithRows(data.result),
                    // commentData:data.result
                });
            })
        getComment();
    }
    submitComment = () => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        if (this.state.comment != '') {
            let submitComment1 = fetch('http://39.105.18.219:3000/submitComment', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    comment: this.state.comment
                })
            })
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                })
                .then(data => {
                   let pro = new Promise((resolve,reject)=>{
                        this.setState({
                            submitSuccess:1
                        })
                        getComment();
                        resolve('success')
                    })
                    .then((data)=>{
                        console.log(data)
                        this.setState({
                            submitSuccess:0
                        })
                    })                    
                })
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.commentContainer}>
                {this.state.commentData.length == 0 ?
                    <ListView
                        dataSource={this.state.ds}
                        renderRow={(rowData) => <ListItem
                            username={'testuser'}
                            commentContent={rowData.content}
                            fabulous={rowData.satisfaction}
                            time={rowData.time.length == 10?new Date(rowData.time*1000).toDateString():new Date(rowData.time).toDateString()}
                            see={rowData.see}
                        />}
                    /> :
                    <Text>数据加载中...</Text>
                }
                {this.state.submitSuccess == 1 ?
                    <Text>评论上传中...</Text>:null
                }
                </View>
                <View style={styles.speak}>
                    <TextInput onChangeText={text => this.setState({ comment: text })} style={styles.commentInput} placeholder="发表你的看法" />
                    <TouchableOpacity style={styles.submitButton} onPress={this.submitComment} >
                        <Text>发送</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}