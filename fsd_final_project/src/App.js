import logo from './logo.svg';
import './App.css';
import RecipeModal from './components/RecipeModal';
import NavBar from './components/NavBar';
import {useState} from 'react';
import Home from './pages/Home';
import SavedRecipes from './pages/SavedRecipes';
import SignIn from './pages/SignIn';

function App() {

  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/auth":
      component = <SignIn />
      break
    case "/saved":
      component = <SavedRecipes />
      break

    default:
      component = <h1>You're in the wrong place!</h1>
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <>
          <NavBar></NavBar>
          {component}
        </>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;

