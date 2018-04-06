import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
} from 'react-native';
const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        height: win.height,
        width: win.width,
        flex: 0,
    },
    functionTitle: {
        backgroundColor: '#fff',
        color: '#222',
        fontSize: 24,
        flex: 2,
        fontWeight: '900',
    },
    addressBox: {
        backgroundColor: '#fff',
        padding: 8,
        flex: 1,
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center'
    },
    suggestBox: {
        flex: 5
    },
    suggestDataBox: {
        flex: 1,
        flexDirection: 'row'
    },
    suggestDataItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    suggestIconBox: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexWarp:'warp',
        flexDirection: 'row',
    }
})