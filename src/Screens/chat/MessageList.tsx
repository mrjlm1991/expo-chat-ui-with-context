import { ScrollView } from "react-native";
import { messageContext } from "../../context/messagesContext";
import React, { useState, useRef, useContext } from "react";
import Colors from "../../constanst/Colors";
import Message from "./Message";

const MessageList = () => {
  // const [messages, setMessages] = useState([
  //   {
  //     user: 1,
  //     fname: "آرمین اشتری",
  //     image: require("../../../assets/BustanPic/profile_pic.jpg"),
  //     time: "12:05",
  //     content: "برا فردا کی پایه س رفقا؟",
  //   },
  //   {
  //     user: 0,
  //     time: "12:09",
  //     content: "من اوکیم اگر دیگران باشند",
  //   },
  //   {
  //     user: 2,
  //     fname: "Mehrdad.Badri",
  //     image: require("../../../assets/BustanPic/profile_pic2.jpg"),
  //     time: "12:07",
  //     content: "من جایی باید باشم اگه تونستم خبر میدم",
  //   },
  //   {
  //     user: 3,
  //     fname: "Hosein Alavi",
  //     image: require("../../../assets/BustanPic/profile_pic3.jpg"),
  //     time: "12:05",
  //     content:
  //       "من نظرم رو سزخه حصاره الان هوا خوبه زیاد گرم نیست دارابادم خوبه بازم هرچی نظر جمعه",
  //   },
  //   {
  //     user: 0,
  //     time: "12:00",
  //     content: "موافقم با سرخه حصار :)",
  //   },
  //   {
  //     user: 0,
  //     time: "12:00",
  //     content: "موافقم با سرخه حصار :)",
  //   },
  //   {
  //     user: 0,
  //     time: "12:00",
  //     content: "موافقم با سرخه حصار :)",
  //   },
  //   {
  //     user: 0,
  //     time: "12:00",
  //     content: "موافقم با سرخه حصار :)",
  //   },
  // ]);

  const {messages,setMessages} = useContext(messageContext);
  // console.log(messages);

  const user = useRef(0);
  const scrollView = useRef();

  return (
    <ScrollView
      overScrollMode="never"
      style={{
        flex: 1,
        backgroundColor: Colors.perpule,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
      }}
      ref={(ref) => (scrollView.current = ref)}
      onContentChange={() => {
        scrollView.current.scrollToEnd({ Animated: true });
      }}
    >
      {messages.map((msg, index) => (
        <Message
          key={msg.index}
          time={msg.time}
          isLeft={msg.user !== user.current}
          message={msg.content}
          fname={msg.fname}
          image={msg.image}
        />
      ))}
    </ScrollView>
  );
};

export default MessageList;
