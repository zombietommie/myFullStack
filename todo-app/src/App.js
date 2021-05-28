import React from "react";
import "./App.css";
import FirstComponent, { SecondComponent } from "./components/learning-examples/FirstComponent.js";

function App() {
  return (
    <div className="App">
      <h1>Tommy's Todo App</h1>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
  );
}



function ThirdComponent() {
  return <div className="thirdComponent">Third Component!</div>;
}

export default App;
