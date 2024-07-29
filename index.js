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
