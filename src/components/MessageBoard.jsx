import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [messageText, setMessageText] = useState("");

  const handleTodoTextChange = (event) => {
    setMessageText(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(messageText);
    console.log(newMessage);
    setMessage(newMessage);
  };

  const deleteMessage = (messageIndex) => {
    const newMessage = [...message];
    newMessage.splice(messageIndex, 1);
    console.log(newMessage);
    setMessage(newMessage);
  };

  return (
    
      <div className="app-wrapper">
        <h1 className="app-title">Message board</h1>
        <form>
        <div className="message-input-container">
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              onChange={handleTodoTextChange}
              placeholder="Enter message here"
            />
          </label>
          <button onClick={addMessage} className="submit-message-button">
            Submit
          </button>
        </div>
        </form>
        <div className="board">
          {message.map((item, index) => {
            return (
              <div className="message" >
                <h1>{item}</h1>
                <button
                  className="delete-button"
                  onClick={() => {
                    deleteMessage(index);
                  }}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
      </div>
      
    
  );
}

export default MessageBoard;
