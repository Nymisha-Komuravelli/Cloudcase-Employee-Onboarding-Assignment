import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import EmployeeOnboardingForm from "./components/EmployeeOnboardingForm";
import StepContextProvider from "./helpers/StepContext";
import { StepContext } from "./helpers/StepContext";

const App = () => {
  return (
    <div style={{ margin: "20px" }}>
      <br />
      <StepContextProvider>
        <StepContext.Consumer>
          {(stepContext) => <EmployeeOnboardingForm />}
        </StepContext.Consumer>
      </StepContextProvider>
    </div>
  );
};

export default App;
