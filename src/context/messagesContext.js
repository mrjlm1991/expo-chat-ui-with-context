import { createContext } from "react";

export const messageContext = createContext({
  messages: [],
  setMessages: () => {}
});
