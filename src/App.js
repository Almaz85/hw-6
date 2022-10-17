import { useState } from "react";
import "./App.css";
const comment = [
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    return;
  };
  const resetHandler=()=>{
    setCounter(0)
  }
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <button>{counter}</button>
      <button onClick={decrement}>-</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
}

export default App;
