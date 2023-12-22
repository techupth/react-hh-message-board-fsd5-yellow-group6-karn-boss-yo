import React, { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const messageText = e.target.elements.messageText.value;
    if (messageText) {
      setMessages([...messages, messageText]);
      e.target.reset();
    }
  };

  const handleDeleteMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <form className="message-input-container" onSubmit={handleMessageSubmit}>
        <label>
          <input
            id="message-text"
            name="messageText"
            type="text"
            placeholder="Enter message here"
          />
        </label>
        <button type="submit" className="submit-message-button">
          Submit
        </button>
      </form>
      <div className="board">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <h1>{message}</h1>
            <button
              className="delete-button"
              onClick={() => handleDeleteMessage(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
