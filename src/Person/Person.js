import React from "react";
import styles from "./Person.module.css";

const Person = props => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        Im {props.name} and i am {props.age} years old!
      </p>
      {/*children refers to any elements between the open an closing tab of our component!*/}
      <p> {props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
