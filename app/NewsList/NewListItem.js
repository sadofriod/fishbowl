import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import {styles} from './NewsListItemStyles'
export default class NewList extends Component{
    renderImgGroup(imgSourceArray){
        return imgSourceArray.map(url => this.renderImg(url,imgSourceArray.length));
    }
    renderImg(url,len){
        return(
            <Image style={{
                flex:0,
                height:(len<3)?120:80,
                width:(Dimensions.get('window').width/len)-18,
                margin:4
            }} source={{uri:url}}/>
        )
    }
    render(){
        return(
            <TouchableHighlight style={styles.itemBox}>
                <View>
                    <View style={styles.userInfo}>
                        <Image style={styles.userHead} source={require('../img/header.jpg')}/>
                        <Text>{this.props.username}</Text>
                    </View>
                    <View>
                        <Text style={styles.titleText}>{this.props.title}</Text>
                    </View>
                    <View style={styles.contentImgBox}>
                        {this.renderImgGroup(this.props.imgSource)}
                    </View>
                    <View>
                        <Text>{this.props.content}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}