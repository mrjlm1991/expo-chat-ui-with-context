import { StyleSheet, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllCobversationScreen from "./AllConversationScreen";
import PrivateConversationScreen from "./PrivateConversationScreen";
import GroupConversationScreen from "./GroupConversationScreen";
import ChannelsScreen from "./ChannelsScreen";
import Colors from "../../constanst/Colors";

const TopTab = createMaterialTopTabNavigator();

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
 <TopTab.Navigator
        initialRouteName="AllCourses"
        backBehavior="initialRoute"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: Colors.white,
          tabBarStyle: { backgroundColor: Colors.four },
        })}
      >
        <TopTab.Screen name="All" component={AllCobversationScreen} />
        <TopTab.Screen name="Private" component={PrivateConversationScreen} />
        <TopTab.Screen name="Groups" component={GroupConversationScreen} />

        <TopTab.Screen name="Channels" component={ChannelsScreen} />
      </TopTab.Navigator>
    </View>
     
    
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
 container:{
  flex:1,
  marginTop:40
 }
});
