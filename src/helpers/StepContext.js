import React, { createContext, useState } from "react";

export const StepContext = createContext({});

const StepContextProvider = (props) => {
  const [current, setCurrent] = useState(0);
  const [employeeData, setEmployeeData] = useState({});
  const [finalEmployeeData, setFinalEmployeeData] = useState([]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1 > 0 ? current - 1 : 0);
  };

  const handleSubmit = () => {
      setFinalEmployeeData([
          ...finalEmployeeData,
          employeeData
      ]);
      setEmployeeData({});
      setCurrent(0)
  }

  return (
    <StepContext.Provider
      value={{
        current,
        next,
        prev,
        employeeData,
        setEmployeeData,
        finalEmployeeData,
        setFinalEmployeeData,
        handleSubmit
      }}
    >
      {props.children}
    </StepContext.Provider>
  );
};

export default StepContextProvider;
