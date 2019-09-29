import React from "react";
import Person from "./Person/Person";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    persons: [
      { id: "dsadas", name: "Max", age: 16 },
      { id: "fasaeq", name: "Manu", age: 23 },
      { id: "paosda", name: "Alex", age: 15 }
    ],
    otherState: "Another value",
    showPersons: false
  };

  nameChangedHandler = (event, personId) => {
    // Devuelve el index de la persona a la que se le esta cambiando el nombre en el input
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId;
    });

    // recupero la persona con el index anterior y creo un nuevo objeto para no mutar el state
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    // creo un nuevo array de personas para no mutar el state y modifico la persona
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

    // NOT DO THIS!!! do not mutate the state
    // const persons = this.state.persons;
    // persons.splice(personIndex, 1);
    // this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    // capturing the showpersons state and toggle its value whenever clicks the button
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = "";
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            Mi Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );

      // if the persons are displayed the button changes to red
      btnClass = styles.Red; // btnClass = "red"
    }

    const classes = []; // this returns "red bold"
    if (this.state.persons.length <= 2) {
      classes.push(styles.red); //classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold); //classes = ["red", "bold"]
    }

    return (
      <div className={styles.App}>
        <h1>App component!</h1>
        <p className={classes.join(" ")}> This is working! </p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {/*
        Alterantive way to the button onClick function from above
        <button onClick={() => this.switchNameHandler("Maximilian")}>
          Switch Name
        </button>
        */}

        {persons}
        {console.log(btnClass)}
        {/* this is an alternate way to do the same that the code from below  */}

        {/* ternary expression to render the components conditionally*/}
        {/* {this.state.showPersons === true ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max!")}
              changed={this.nameChangedHandler}
            >
              Mi Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null} */}
      </div>
    );
  }
}

export default App;

// state = {
//   persons: [
//     { name: "Max", age: 16 },
//     { name: "Manu", age: 23 },
//     { name: "Alex", age: 15 }
//   ],
//   otherValue: "dada"
// };

// switchNameHandler = () => {
//   this.setState({
//     persons: [
//       { name: "Maximilian", age: 16 },
//       { name: "Manu", age: 23 },
//       { name: "Alex", age: 26 }
//     ]
//   });
// };
