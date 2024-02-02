import Header from "./component/Header/Header";
import UserInput from "./component/UserInput/UserInput";
import Result from "./component/Result/Result";
import Message from "./component/Message/Message";
import React from "react";

function App() {
  const [userInput, setUserInput] = React.useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12,
  });
  const [isPopupVisible, setPopupVisible] = React.useState(false);
  const [flag, setFlag] = React.useState({
    initialInvestment: true,
    annualInvestment: true,
    expectedReturn: true,
    duration: true,
  });

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  let valid = true;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputIdentifier]: +newValue,
      };
    });
    setFlag({
      initialInvestment: userInput.initialInvestment > 0,
      annualInvestment: userInput.annualInvestment > 0,
      expectedReturn: userInput.expectedReturn > 0,
      duration: userInput.duration > 0,
    });

    valid =
      flag.annualInvestment &&
      flag.initialInvestment &&
      flag.expectedReturn &&
      flag.duration;
  }
  console.log(valid);

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!valid && <Message notification={"Please enter valid number"} />}
      {valid && <Result input={userInput} />}
    </>
  );
}

export default App;
