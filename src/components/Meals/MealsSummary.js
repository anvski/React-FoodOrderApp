import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>
        Test h2 section that contains dummy text pertaining to the ReactMeals
        application
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante
        nisi, rhoncus vel mollis ac, imperdiet at mauris. Fusce malesuada
        maximus ex, ut ultricies ligula tempor ut.
      </p>
      <p>
        Morbi non nunc sit amet dolor semper sodales. Nam velit neque, tristique
        quis posuere id, faucibus ut risus. Aenean ultricies pulvinar urna. In
        hac habitasse platea dictumst. Etiam non lorem nec mauris imperdiet
        rutrum.
      </p>
    </section>
  );
};

export default MealsSummary;
