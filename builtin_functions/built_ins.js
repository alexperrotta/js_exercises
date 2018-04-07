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

var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

var sortedNames = people.sort(function(a, b){
	return sum(a.length - b.length);
});

console.log(sortedNames);



