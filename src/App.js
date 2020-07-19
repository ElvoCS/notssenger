import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["Hello", "Hi", "Wag1"]);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    //prevents from refreshing
    event.preventDefault();
    //all logic to send msg goes here
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Notssenger</h1>

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
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
