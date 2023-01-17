import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsVaid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) setIsVaid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsVaid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input
          value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>

      <Button isValid={isValid} type="submit">
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
