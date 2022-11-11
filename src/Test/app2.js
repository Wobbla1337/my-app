import logo from './logo.svg';
import './App.css';
import ArrowComponent from './Arrow';
import ClassComponent from './Class';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="nnoopener noreferrer"
        >
          Learn React
        </a>
        <ArrowComponent message="Hello from App" text="Small text here"/>
        <ClassComponent />
      </header>
    </div>
  );
}

export default App;
