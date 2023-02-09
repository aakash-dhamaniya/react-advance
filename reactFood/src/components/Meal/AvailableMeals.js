import React from "react";
import "./AvailableMeals.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li key={meal.id}>
      <h3>{meal.name}</h3> <p>{meal.description} </p>
      <p id="price">{meal.price} </p>
      <hr className="line" />
    </li>
  ));
  return (
    <section className="mealList">
      <ul className="list">{mealsList}</ul>
    </section>
  );
}

export default AvailableMeals;
