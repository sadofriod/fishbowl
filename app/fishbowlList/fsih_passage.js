import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Dimensions,
} from 'react-native';
let dim = Dimensions.get('window');
import { styles } from './fishbowlListStyles'
export default class listItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePath: '',
            fishDirection: '数据加载中'
        }
    }
    static navigationOptions = {
        title:'详情'
    }
    componentDidMount() {
        AsyncStorage.getItem('fish_id').then(data => {
            console.log(data)
            let getFishDirection = fetch('http://39.105.18.219:3010/getFishDirection',{
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    fish_id: data
                })
            })
            .then(res=>{
                if(res.ok){
                    return res.json();
                }
            })
            .then(data=>{
                let result = data.result[0];
                this.setState({
                    imagePath:result.fish_image?result.fish_image:'http://www.zaojingfan.com/wp-content/uploads/2015/02/975455166d224f4a4c2fd5ed09f790529a22d1cd.jpg',
                    fishDirection:result.fish_direction
                })
            })

        })
    }
    render() {
        return (
            <ScrollView>
                <Image style={{ width: dim.width, height: 260 }} source={{ uri: this.state.imagePath }} />
                <Text style={{ width: dim.width, padding: 8 }}>{this.state.fishDirection}</Text>
            </ScrollView>
        )
    }

}