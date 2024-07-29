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
fruit.splice(2,0, "mango")
fruit.shift()
fruit.pop()
console.log("final result:", fruit.length)