import { useState } from "react";

function MessageBoard() {
  //1.สร้าง State ของ กล่องข้อความออกมา โดยมีค่าเริ่มต้นเป็นข้อความเปล่าๆ คือ ""
  const [messageInput, setMessageInput] = useState("");
  //2.สร้าง State ของ ข้อความที่ถูกแสดงออกมาหลังกด button โดยกำหนดให้มีค่าเริ่มต้นเป็น Array เปล่าๆ คือ []
  const [messageList, setMessageList] = useState([]);
  //5.สร้าง react component ที่ เก็บ value ที่เกิดขึ้นใน component นี้ ลงใน setMessageInput ซึ่งค่า setMessageInput คือ state สุดท้ายของ messageInput หรือก็คือ value ที่เราให้ไปใน input ของ label
  const setMessageChange = (event) => {
    setMessageInput(event.target.value);
  }
  //7.สร้าง react component ที่ทำการ
  const addMessage = () => {
    //7.1เก็บค่าทั้งหมดของ messageList ทั้งหมด โดยค่าเริ่มต้นจะมีค่าเป็น [] หรือไม่มีค่าอะไรเลย
    const newMessage = [...messageList];
    //7.2ส่ง messageInput ก็คือ value ที่อยู่ในกล่อง input (ข้อความที่เราพิมพ์เข้าไป)
    newMessage.push(messageInput);
    //7.3กำหนดให้ setMessageList มีค่าเท่ากับ newMessage ก็คือ MessageList ทั้งหมด + messageInput ที่ push ไปล่าสุด
    setMessageList(newMessage);
  }
  //10.ใช้งาน callback function ที่ทำงานโดนการลบ value ต่าม parameter ชื่อ messageIndex โดยใช้คำสั่ง splice 
  const deleteMessage = (messageIndex) => {
    const newMessage = [...messageList];
    //10.1 messageIndex ในที่นี้ คือ ตำแหน่งของ value ที่เราต้องการจะลบ ซึ่งเป็น argument ของมันมาจาก index ในขั้นตอนที่ 9
    newMessage.splice(messageIndex, 1);
    setMessageList(newMessage)
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            
            //3.กำหนดให้ตัว input ใน label มีค่าตาม messageInput ในค่าเริ่มต้นนี้ คือ ""
            value={messageInput}
            //4.กำหนดให่ตัว input ใน label สามารถเปลี่ยนแปลงได้ตาม react component ชื่อ setMessageChange
            onChange={setMessageChange}

          />
        </label>
        <button 
        //6.สร้าง attribute ชื่อ onClick เพื่อทำให้ button สามารถกดได้และทำการเข้า react component ชื่อ addMessage
        onClick={addMessage} className="submit-message-button">Submit</button>
      </div>
      <div class="board">
        
        {
          //8.เอาค่าทั้งหมดของ messageList มาแสดงผล
          messageList.map((item,index) => {
            return (
            <div key={index} className="message">
            <h1>{item}</h1>
            
            <button 
            //9.ทำการกำหนดให้ปุ่ม x สามารถกดได้ โดยเพิ่ม parameter ชื่อ index เข้าไปใน function
            className="delete-button" onClick={() => {
              deleteMessage(index)
            }}>x</button>
            </div>
          )
          })
        }

      </div>
    </div>
  );
}

export default MessageBoard;