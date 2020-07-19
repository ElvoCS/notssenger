import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";

function App() {
  //use state is var in react
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Elvo", text: "Wag1 bro" },
    { username: "Billy", text: "Huurrrrr" },
  ]);
  const [username, setUsername] = useState("");

  //block of code executed based on condition
  useEffect(() => {
    //run code here
    //const username= prompt("Please enter your username")
    setUsername(prompt("Please enter your name"));
  }, []); //condition if left blank this will run code once when app component loads

  const sendMessage = (event) => {
    //prevents from refreshing
    event.preventDefault();
    //all logic to send msg goes here
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Notssenger</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            onClick={sendMessage}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
