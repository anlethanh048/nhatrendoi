// import logo from './logo.svg';
import './App.css';
import GlobalStyles from './components/GlobalStyles';
import Home from './components/Home' 

function App() {
   
  return (
      <GlobalStyles>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className='test'>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header> */}
          <Home></Home>
        </div>
    </GlobalStyles>
    );
}

export default App;
