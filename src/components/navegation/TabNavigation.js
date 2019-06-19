import React, { Component } from 'react';
import { Icon } from 'native-base';
import { createBottomTabNavigator, BottomTabBar, createAppContainer } from 'react-navigation';
import AllToDo from '../../screens/AllToDo';
import ActiveToDo from '../../screens/ActiveToDo';
import CompletedToDo from '../../screens/CompletedToDo';

const nav = createBottomTabNavigator({
  AllToDo: { screen: AllToDo },
  Active: { screen: ActiveToDo },
  Completed: { screen: CompletedToDo }
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const { routeName } = navigation.state;
      let iconName;
      if(routeName === 'ALLToDo') {
        iconName = `list`;
      }else if(routeName === 'Active'){
        iconName = `unlock`;
      }else{
        iconName = `checkmark`;
      }
      return <Icon name={iconName} color={'red'} active={true} />
    }
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: BottomTabBar,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false
});

const TabNavigation = createAppContainer(nav);

export default TabNavigation;