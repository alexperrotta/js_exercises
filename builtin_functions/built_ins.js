// Anonymous functions 

var add = function(num1, num2) {
  return num1 + num2; 
}

var result = add(1, 2);


var subtract = function(num1, num2) {
  return num1 - num2; 
}

var result = subtract(1, 2);






var calculate = function(num1, num2, operation) {
  if (operation = "add") {
    return num1 + num2;
  } else if (operation = "subtract") {
    return num1 - num2;
  }
}

// do this instead - callback

var calculate = function(num1, num2, operation) {
  return operation(num1, num2);
}

calculate(1, 2, add); // when we pass in add, it's calling the add function from above

// this is helpful when you use other people's code, you import their library/code and add it to your html file




var array = [1, 2, 3];

var newArray = array.map(function(currentValue, index, array){
  return currentValue * 3; // multiply every element by 3
});  // .map assigns the array to a new array

console.log(array);
console.log(newArray);








/* Positive Numbers
Write a function which takes an array of numbers as input and returns a new array containing only 
the positive numbers in the given array. */

var array = [1, 2, 5, -6, -10, 14, 16, -3];

var newArray = array.filter(function(number, index, array){
  return number > 0; 
});  

console.log(array);
console.log(newArray);



/* Even Numbers
Write a function which takes an array of numbers as input and returns a new array 
containing only the even numbers in the given array. */

var array = [1, 2, 5, -6, -10, 14, 16, -3];

var newArray = array.filter(function(number, index, array){
  return number % 2 === 0; 
});  

console.log(array);
console.log(newArray);




/* Square the Numbers
Write a function which takes an array of numbers as input and returns a new array containing result of 
squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) 
should give [1, 4, 9]. */

var array = [1, 2, 5, -6, -10, 14, 16, -3];

var newArray = array.map(function(number, index, array){
  return number * number; 
});  

console.log(array);
console.log(newArray);


/* Cities 1
Write a function which takes an array of city objects like such:
as input and returns a new array containing the cities whose temperature is cooler than 70 degrees. */

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var coolCities = cities.filter(function(element){
	return element.temperature < 70.0;
});

console.log(coolCities);



/* Cities 2
Write a function which takes an array of city objects like the above problem as input and 
returns an array of the cities names. */

 var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var namesOfCities = cities.forEach(function(name){
	return cities.name;
});

console.log(namesOfCities); 




/*
Good Job!
Given an array of people's names:

Print out 'Good Job, {{name}}!' for each person's name, one on a line. */

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

var goodJob = people.forEach(function(person){
	console.log('Good job ' + person + '!');
});



/*
Sort an array
Given an array of strings such the array of names given in the previous problem, 
sort them by alphabetically order. */

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

var sortedNames = people.sort();

console.log(sortedNames);







/* Sort an array, 2
Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first. */

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

var sortedNames = people.sort(function(a, b){
	return a.length - b.length;
});

console.log(sortedNames);



/* Sort an array, 3
Given an array of array of numbers like:

var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];
Sort the array by the sum of each inner array. For the above example, 
the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:

[
  [1, 3, 4],
  [3, 6],
  [2, 4, 6, 8]
]  */

/*
arr.sort(function(a, b){
// if the sum of a's numbers is less than the sume of b's numbers
//  then a comes first. Return a negative number
	var aSum = a.reduce(function(acc, item){
		return acc + item;
	}, 0);


	var bSum = b.reduce(function(acc, item){
		return acc + item;
	}, 0);

	return aSum - bSum;
// if the sum of b's numbers is less than the sum of a's numbers
//  then b comes first. Return a positive number


})

console.log(arr);


// version 2


 arr.sort(function(a, b){

	var sum = function(acc, item){
		return acc + item;
	}
	var aSum = a.reduce(sum, 0);
	var bSum = b.reduce(sum, 0);

	return aSum - bSum;

})

console.log(arr); */





/* 3 times
Given this function:

function call3Times(fun) {
  fun();
  fun();
  fun();
}
Use the call3Times function to print "Hello, world!" 3 times. */

function call3Times(str) {
  return str.repeat(3);
}

console.log(call3Times('Hello world!'));





/* n times
You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. 
It will call that function for that many times. Example:

> callNTimes(5, hello)
Hello, world!
Hello, world!
Hello, world!
Hello, world!
Hello, world!
You are allowed to use a loop in the implementation of callNTimes. */


function callNTimes(times, string) {
	if (times > 0) {
		return string.repeat(times);	
	} else {
		return "";
	}
}

console.log(callNTimes(5, 'hello '));





/* Sum an array
Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. 
Use the reduce method to do this.

> sum([1, 2, 3])
6 */



function sum(numbers) {
  return numbers.reduce(function(a,b) {
    return a + b
  });
}

console.log(sum([1, 2, 3]));


/* Acronym
Write a function acronym that takes an array of words as argument and returns the acronym of the words. 
Use the reduce method to do this.

> acronym(['very', 'important', 'person'])
'VIP'
> acronym(['national', 'aeronautics', 'space', 'administration'])
'NASA'  */


function acronym() {

}

console.log();







/* Bonus: forEach
Implement your own custom forEach function which takes two arguments: an array arr and a function fun. 
It will call fun passing each item in arr to fun as the first argument. Example:

var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
];

forEach(arr, function(person) {
  console.log('Hello, ' + person.name + '!');
});
The above program will print:

Hello, Bob!
Hello, Alice!
Hello, Joe!
You can use a loop in the implementation of this function.  */

var forEach = function(arr, callback) {
// loop over the input array, call the callback on each item of the array
  for (var i = 0; i < array.length; i++) {
    callback(arr[i]);
  }
}



forEach([1, 2, 3], function(item){  // the array is the 'arr' parameter and the function(item) is the callback
  console.log(item);
});




/* Bonus: map
Implement your own custom map function which takes two arguments: an array arr and a function fun. 
It will return a new array, with each of its results being the result of calling fun with each array element. */

var map = function(arr, callback) {
  // return a new array
  // each new item should be the result of the callback, passing in an individual item
  var array = [];

   for (var i = 0; i < array.length; i++) {
    var item = arr[i];
    var newItem = callback(item);
    newArray.push(newItem);
  }

  return newArray;
}

var result = map([1, 2, 3], function(item){
  return item * item;
})

console.log(result);



/* Bonus: Caesar Cipher
Rewrite this cipher function without using a loop, using the help of array's map, join, and string's split method.

function cipher(text) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var chr = text[i];
    var idx = alphabet.indexOf(chr.toUpperCase());
    var newIdx = idx + 13;
    if (newIdx >= alphabet.length) {
      newIdx -= 26;
    }
    result += alphabet[newIdx];
  }
  return result;
}

// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
var encrypted = cipher('GENIUS');

console.log(encrypted);   */



