import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import LikeButton from "./components/Like/LikeButton";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div className="App">
      <BsFillCalendarFill color="red" size="40" />
      <LikeButton
        size="60"
        color="black"
        onClick={() => console.log("clicked")}
      />
      <ListGroup
        items={["a", "b", "c"]}
        heading="list"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <p>This is an alert!</p>
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        Show Alert
      </Button>
    </div>
  );
}

export default App;
