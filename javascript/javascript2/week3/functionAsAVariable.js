// 1.
const fnOne = () => {
  console.log(`Hello, I'm the first function`);
};

const fnTwo = () => {
  console.log(`Hello, I'm the second function`);
};

const fnThree = () => {
  console.log(`Hello, I'm the third function`);
};

const arrayOfFunctions = [fnOne, fnTwo, fnThree];

arrayOfFunctions.forEach((item) => item());

// 2.

const functionExpression = () => {
  console.log(`I'm a function expression`);
};

functionExpression();
functionDeclaration();

function functionDeclaration() {
  console.log(`I'm a function declaration`);
}

// 3.

const someObjectWithFunction = {
  name: 'Rostyslav',
  someFunction() {
    console.log(`Hello ${this.name}`);
  },
};

someObjectWithFunction.someFunction();
