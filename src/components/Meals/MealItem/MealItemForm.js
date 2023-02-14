import { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountRef = useRef();

  const submitItemHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  

  return (
    <form className={classes.form} onSubmit={submitItemHandler}>
      <Input
        ref = {amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isValid && <p>Please enter a valid Amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
