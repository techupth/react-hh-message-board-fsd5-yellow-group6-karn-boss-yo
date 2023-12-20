import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [messageText, setMessageText] = useState("");

  const handleTodoTextChange = (event) => {
    setMessageText(event.target.value);
  }

  const addMessage = () => {
    event.preventDefault()
    const newMessage = [...message]
    newMessage.push(messageText)
    setMessage(newMessage)
  }

  const deleteMessage = (messageIndex) => {
    const newMessage = [...message]
    newMessage.splice(messageIndex, 1)
    setMessage(newMessage)
  }

  return (
    <form>
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            onChange={handleTodoTextChange}
            placeholder="Enter message here"
          />
        </label>
        <button onClick={addMessage} className="submit-message-button">Submit</button>
      </div>
      <div class="board">
        {message.map((item) => {
          return(
              <div className="message">
                <h1>{item}</h1>
              <button onClick={() => {
                deleteMessage(index);
              }} className="delete-button">x</button>
             </div>
          )
        })}     
      </div>
    </div>
    </form>
  );
}

export default MessageBoard;
