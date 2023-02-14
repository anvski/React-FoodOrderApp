import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "pizza",
    description: "A tasty pepperoni pizza",
    price: 10.2,
  },
  {
    id: "m2",
    name: "macaroni",
    description: "Plain boiled macaroni with cheese",
    price: 9.99,
  },
  {
    id: "m3",
    name: "Tuna-wrap",
    description: "Flavory tortilla wrap filled with tuna, mayo and cheese",
    price: 13.99,
  },
  {
    id: "m4",
    name: "Chicken plate",
    description: "Portion of chicken with fries",
    price: 11.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
