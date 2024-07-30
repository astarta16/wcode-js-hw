// N1

let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(fruits.length - 2, 1, "strawberry");
console.log(fruits);

// N2
let info = "good day";

let extract = info.slice(info.indexOf("day"));
console.log(extract);

// N3

function getStringLength(str) {
  return str.length;
}

let exampleString = "hello world";
console.log(getStringLength(exampleString));

// N4

let list = [5, 25, 89, 120, 36];

list.push("javascript", "python");
list.unshift("html", "css");
console.log(list.length);

myArray.shift();
myArray.pop();

console.log(list);

// N5
let fruit = ["orange", "banana", "kiwi"];
console.log(fruit.length);
fruit.push("apple", "pineapple");
fruit.unshift("Watermelon");
console.log(fruit.length);
fruit.splice(2, 0, "mango");
fruit.shift();
fruit.pop();
console.log("final result:", fruit.length);

// N6
let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, "a", "b", "c");
console.log(array3);

// N7
let array7 = [15, 100, 25, 10, 36];
array7.splice(3, 1);
console.log(array7);

// N8
let array8 = [1, 2, 3, 4, 5];
array8.splice(2, 1, "three");
console.log(array8);

// N9

let array4 = [1, 2, 3, 4, 5];
let sum = 0;

array4.forEach((number) => {
  sum += number;
});

console.log(sum);

// N10
let array2 = [14, 150, 'css', null, 'javascript', 25];

let newArray = array2.map(element => {
  if (typeof element === 'number') {
    return element ** 2;
  } else if (typeof element === 'string') {
    return element.toUpperCase();
  } else {
    return element;
  }
});

console.log(newArray);

// N11
let correctAnswer = 'tbilisi'

function askQuestion() {
    const userAnswer = prompt("country of georgia? ").toLowerCase()
    
    if (userAnswer === correctAnswer.toLowerCase()) {
        console.log("correct")
    } else {
        console.log("incorrect")
    }
}
askQuestion();

