import React from "react";
import classes from "./Mealitem.module.css";
import MealItemForm from "./MealItemForm";
function Mealitem(props) {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.title} </h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div className={classes.form}>
        <div>
          <MealItemForm id={props.id} item={props} />
        </div>
      </div>
    </li>
  );
}

export default Mealitem;
