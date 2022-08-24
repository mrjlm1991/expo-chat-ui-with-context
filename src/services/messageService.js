import axios from "axios";
import React from "react";

const SERVER_URL = "http://localhost:9000";

// @desc Get All Messages
// @route GET http://localhost:9000/messages
export const getAllMessages = () => {
  const url = `${SERVER_URL}/messages`;
  return axios.get(url);
};



// @desc  Create New Message
// @route POST http://localhost:9000/messages
export const createMessage = (message) => {
  const url = `${SERVER_URL}/messages`;
  return axios.post(url, message);
};

