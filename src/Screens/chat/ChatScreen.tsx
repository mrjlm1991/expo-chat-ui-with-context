import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { messageContext } from "../../context/messagesContext";
import BackGround from "../../../assets/BustanPic/bg_pattern.svg";
import Colors from "../../constanst/Colors";
import { useDimensions } from "@react-native-community/hooks";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

const ChatScreen = ({ navigation }) => {
  // const { screen } = useDimensions();
  const [messages, setMessages] = useState([
    {
      user: 1,
      fname: "آرمین اشتری",
      image: require("../../../assets/BustanPic/profile_pic.jpg"),
      time: "12:05",
      content: "برا فردا کی پایه س رفقا؟",
    },
    {
      user: 0,
      time: "12:09",
      content: "من اوکیم اگر دیگران باشند",
    },
    {
      user: 2,
      fname: "Mehrdad.Badri",
      image: require("../../../assets/BustanPic/profile_pic2.jpg"),
      time: "12:07",
      content: "من جایی باید باشم اگه تونستم خبر میدم",
    },
    {
      user: 3,
      fname: "Hosein Alavi",
      image: require("../../../assets/BustanPic/profile_pic3.jpg"),
      time: "12:05",
      content:
        "من نظرم رو سزخه حصاره الان هوا خوبه زیاد گرم نیست دارابادم خوبه بازم هرچی نظر جمعه",
    },
    {
      user: 0,
      time: "12:00",
      content: "موافقم با سرخه حصار :)",
    },
    {
      user: 0,
      time: "12:00",
      content: "موافقم با سرخه حصار :)",
    },
    {
      user: 0,
      time: "12:00",
      content: "موافقم با سرخه حصار :)",
    },
    {
      user: 0,
      time: "12:00",
      content: "موافقم با سرخه حصار :)",
    },
  ]);

  return (
    <messageContext.Provider
    value={{
     messages,
     setMessages
    }}
    >
      <View style={styles.container}>
        <ChatHeader navigation={navigation} />

        <MessageList />

        <ChatInput />
      </View>
    </messageContext.Provider>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.four,
  },
});
