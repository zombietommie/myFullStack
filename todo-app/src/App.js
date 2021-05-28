import './App.css';

// This is the Root of hte APP!
function App() {
  return (
    <div className="App">
      My Hello World
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
    </div>
  );
}

function FirstComponent() {
  return (
    <div className="firstComponent">
    Testing New Component
    </div >
  )
}

function SecondComponent() {
  return (
    <div className="secondComponent">
    Component number 3, yes this is my third component
    </div >
  )
}



export default App;
