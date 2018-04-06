import React, { Component } from 'react';
import {
    View,
    Dimensions,
    TouchableHighlight,
    Text,
    Image
} from 'react-native';
import { styles } from './detailMainStyle';
export default class detail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        <View>
            <Text style={styles.functionTitle}></Text>
            <View style={styles.addressBox}></View>
            <View style={styles.suggestBox}>
                <View style={styles.suggestDataBox}>
                    <View style={styles.suggestDataItem}>
                        <Text style={{color:'#222',fontSize:18,fontWeight:'900'}}>
                            25.0℃
                        </Text>
                        <Text>
                            expect value 25.0℃
                        </Text>
                    </View>
                    <View style={styles.suggestDataItem}>
                        <Text style={{color:'#222',fontSize:18,fontWeight:'900'}}>
                            12.08%
                        </Text>
                        <Text>
                            expect value 12.08%
                        </Text>
                    </View>
                    <View style={styles.suggestDataItem}>
                        <Text style={{color:'#222',fontSize:18,fontWeight:'900'}}>
                            7.5 g/ml
                        </Text>
                        <Text>
                            expect value 7.5 g/ml
                        </Text>
                    </View>
                </View>
                <View style={styles.suggestIconBox}>
                
                </View>
            </View>
            <View></View>
        </View>
    }
}