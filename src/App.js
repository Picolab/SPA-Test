import logo from './logo.png';
import './App.css';
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld/>
      </header>
    </div>
  );
}

export default App;
