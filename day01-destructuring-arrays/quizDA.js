//Sure! Let's do a quick quiz on array destructuring. I'll ask you some questions, and you can provide your answers. 

//▎Question 1:

//Given the following array:

const fruits = ['apple', 'banana', 'cherry'];


//How would you use destructuring to assign the first and second elements of the array to variables named firstFruit and secondFruit?

//Answer
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);

//▎Question 2:

//If you have this array:

const numbers = [1, 2, 3, 4, 5];


//How can you skip the first two elements and assign the rest to a variable called remainingNumbers?

//Answer

const [ , , ...remainingNumbers] = numbers;
console.log(remainingNumbers);


//▎Question 3:

//Consider the following array:

const colors = ['red', 'green', 'blue', 'yellow'];


//How would you destructure this array to get the last color into a variable named lastColor?

//Answer
const [ , , , lastColor] = colors;
console.log(lastColor);

//▎Question 4:What will be the output of the following code?

//const [a, b, ...rest] = [10, 20, 30, 40, 50];
//console.log(a, b, rest);

// Answer >>>  10 20 [30, 40, 50]

//▎Question 5:

//How would you swap the values of two variables, x and y, initialized as follows?

let x = 5;
let y = 10;

[x, y] = [y, x];
console.log(x, y)


//Go ahead and answer these questions!


