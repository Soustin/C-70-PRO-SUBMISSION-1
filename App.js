import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import WriteStory from "./screens/WriteStoryScreen";
import ReadStory from "./screens/ReadStoryScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: { screen: WriteStory },
  ReadStory: { screen: ReadStory }
});

defaultNavigationOptions : ({navigation})=>({
  tabBarIcon: ({})=>{
    const rootName = navigation.state.rootName
    if (rootName=='WriteStory'){
      return(
        <Image
        source={require ("./assets/WRITESTORY.png")}
        style={{width: 40, height: 40, borderRadius: 40/ 2}}/>
      )
    }else if(rootName==='ReadStory'){
      return(
        <Image
        source={require ("./assets/ReadStory.jpg")}
        style={{width: 40, height: 40, borderRadius: 40/ 2}}/>
      )
    }
  }
})
tabBarOptions : {
  activeTintColor : 'magenta'
  inactiveTintColor : 'grey'
}

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
