
import './App.css';
import { useState } from 'react';



function App() {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <div className="chatbot-icon">
      <button onClick={toggleChatbot}>
        {chatbotVisible ? (
          <img src="https://static.thenounproject.com/png/1155617-200.png" alt="Close Chatbot" />
        ) : (
          <img src="https://cdn-icons-png.flaticon.com/512/5962/5962463.png" alt="Open Chatbot" />
        )}
      </button>
      {chatbotVisible && (
         <div
         style={{
           backgroundColor: '#e8e8e8', // Set your desired background color here
           padding: '10px', // Optional: Add padding to the iframe container
         }}
       >
        <iframe title="Bistec Chat Bot" src='https://webchat.botframework.com/embed/SupunBotLanguage-QnATestBot?s=n0kWzdSgBLQ.RvpbJbURsNcWeA4gtG5R2mxoyrUAXNqm6ZlFEiWjoRo'  style={{ height: '400px' }}/>
        </div>
      )}
    </div>
  );
}


export default App;
