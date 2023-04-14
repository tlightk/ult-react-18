import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "./App.css";

function App() {
  let items = ["Item 1", "Item 2", "Item 3"];

  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div className="App">
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="danger" onClick={() => console.log("clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
