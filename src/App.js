import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["Hello", "Hi", "Wag1"]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    //all logic to send msg goes here
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Notssenger</h1>
      <input
        onClick={sendMessage}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button onClick={sendMessage}>Send Message</button>
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
