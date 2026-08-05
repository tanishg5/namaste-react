import { useState } from "react";
import "./App.css";
import  Header from "./components/Header.jsx";
import { Body } from "./components/Body.jsx";
 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
