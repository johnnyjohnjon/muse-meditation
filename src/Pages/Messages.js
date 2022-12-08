import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "/Users/JohnD/muse/src/Components/ChatBot/config.js";
import MessageParser from "/Users/JohnD/muse/src/Components/ChatBot/MessageParser.js";
import ActionProvider from "/Users/JohnD/muse/src/Components/ChatBot/ActionProvider.js";
import "/Users/JohnD/muse/src/App.css";

function Messages() {
  return (
    <div className=".react-chatbot-kit-chat-container">
      
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      
    </div>
  );
}

export default Messages;