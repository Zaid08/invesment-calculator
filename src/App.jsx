import Inputs from "./components/Inputs"
import Results from "./components/Results"
import { useState } from "react";

const INITIAL_INPUTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUTS);

  const inputIsValid = userInput.duration >= 1;

  function handleChange( inputIdentifier, newValue){
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue // use plus to convert strings values to the number
      }
    })
  }



  return (
    <>
      <Inputs userInput={userInput} onChange = {handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results userInput={userInput}/>}
    </>
  )
}

export default App
