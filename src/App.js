import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  //use state is var in react
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Elvo", message: "Wag1 bro" },
    { username: "Billy", message: "Huurrrrr" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    //run once when app components loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []); //only running when page loads

  //block of code executed based on condition
  useEffect(() => {
    //run code here
    //const username= prompt("Please enter your username")
    setUsername(prompt("Please enter your name"));
  }, []); //condition if left blank this will run code once when app component loads

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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

      <FlipMove>
        {messages.map((message) => (
          <Message username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
