import "./App.css";
import RecipeGrid from "./Components/RecipeGrid";
import React, { useState } from "react";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RecipeGrid />
      </header>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
