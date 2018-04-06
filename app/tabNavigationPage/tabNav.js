import React, { Component } from 'react';
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation';
import Main from '../NewsList/NewsListContainer';
import Second from './second';
import Third from './third';
import Fourth from './fourth';
export default TabNavigation = TabNavigator(
    {
        Home: { screen: Main },
        Second: { screen: Second },
        Third: { screen: Third },
        Fourth : { screen: Fourth },
    },
    {
    //     navigationOptions:({navigation})=>({
    //         tabBarIcon:({focused, tintColor}) =>{
    //             const {routeName} = navigation.state;
    //             let 
    //         }
    //     }),
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#cccccc',
            style:{
                backgroundColor:'#d43d3d',
            }
        },
    //     tabBarComponent: TabBarTop,
         tabBarPosition: 'bottom',
    //     animationEnabled: false,
    //     swipeEnabled: false,
    }
)