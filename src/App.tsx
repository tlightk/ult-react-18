import { useState } from "react";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items = ["Item 1", "Item 2", "Item 3"];

  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div className="App">
      <ListGroup
        items={items}
        heading={"Items"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
