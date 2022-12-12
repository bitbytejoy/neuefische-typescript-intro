import React from 'react';
import logo from './logo.svg';
import './App.css';

function basicTypes (): void {
  const number = 1;

  console.log(number);
  console.log(number.toFixed(2));

  const str: string = ' Hello world  ';

  console.log(str.length);
  console.log(str.substring(2));
  console.log(str.trim());

  const bool: boolean = false;

  console.log(bool);

  const abc: string[] = ["a", "b", "c"];

  console.log(abc.length);
  console.log(abc.push());
  console.log(abc.pop());
  console.log(abc.unshift("c"));
  console.log(abc.shift());
  console.log(abc);

  const num2 = 0 || 1;
  console.log("num2: ", num2);
}

type User = {
  name: string|null,
  age: number,
  pets: string[],
  sayName: () => string|null,
  optional?: number
};

function objectTypes () {
  const user: User = {
    name: null,
    age: 20,
    pets: [],
    sayName (): string|null {
      return this.name;
    }
  };

  user.name = "Hello";

  console.log(user.sayName());
  user.name = "Hello";
  console.log(user.name);

  const users: User[] = [
    {
      name: "John",
      age: 20,
      pets: [],
      sayName (): string|null {
        return this.name;
      }
    },
    {
      name: "John",
      age: 20,
      pets: [],
      sayName (): string|null {
        return this.name;
      }
    },
  ];

  console.log(users);

  let str = "";
  if (str) {
    console.log("HERE");
  }

  console.log(!!"");
  console.log(!!0);
  console.log(!!undefined);
  console.log(!!null);
  console.log(!!false);

  console.log(!!NaN);
  console.log(!!Infinity);
  console.log(!![]); // TRUE
  console.log(!!{}); // TRUE
}

function arrays () {
  const animals: string[] = [
    "dog",
    "cat",
    "horse",
    "unicorn",
    "piglet",
    "tiger",
    "bear"
  ];

  const shortAnimals = animals.filter(animal => animal.length < 5);
  console.log("Short animals", shortAnimals);

  const repeatAnimals = animals.map(animal => animal.repeat(2));
  console.log("Repeat animals", repeatAnimals);

  const characterCount = animals.reduce(
    (sum, current) => sum + current.length,
    0
  );
  console.log("Character count", characterCount);

  let test = "abc";

  console.log("Animals last console.log")
  animals.forEach(console.log);

  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }

  for (let animal of animals) {
    console.log(animal);
  }

  const map: {[key: string]: number} = {
    "Test": 1,
    "Hello": 2
  };

  console.log(map["Test"]);
  console.log(map["OOps"]);

  for (const key in map) {
    console.log(map[key]);
  }

  map["Test"] = 3;

  console.log("Test" in map);
}

function spreadOperator () {
  const user: User = {
    age: 30,
    name: "John",
    pets: [],
    sayName(): string | null {
      return this.name;
    }
  };

  const user2 = {
    ...user,
    name: "Mike",
  };


  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const totalArr = [...arr, ...arr2];
  const arrTotal: number[] = [];
  arrTotal.concat(arr).concat(arr2);
}

function App() {
  // basicTypes();
  // objectTypes();
  arrays();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
