import React from 'react';
import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../Components/ChatBot/ActionProvider';
import MessageParser from '../Components/ChatBot/MessageParser';
import config from '../Components/ChatBot/config';

function Messages() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      </header>
    </div>
  );
}

export default Messages;

