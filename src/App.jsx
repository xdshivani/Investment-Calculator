import "./App.css";
import Header from "./Components/Header";
import Result from "./Components/Result";
import UserInput from "./Components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange = {handleChange} />
      {!inputIsValid && <p className="center">enter valid input data</p>}
      {inputIsValid && <Result input={userInput}/>}
    </>
  );
}

export default App;
