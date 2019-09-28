import React from "react";
import "./Person.css";
import Radium from "radium";

const Person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        Im {props.name} and i am {props.age} years old!
      </p>
      {/*children refers to any elements between the open an closing tab of our component!*/}
      <p> {props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(Person);
