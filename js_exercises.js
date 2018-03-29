/* Write a function hello which given a name, says hello to the name. Use the following template:

function hello(name) {
  // put your code here
}
hello('Mustache');

Make the above program print

Hello, Mustache! */

function hello(name) {
    var greeting = 'Hello, ' + name + '!';
    return greeting;
  }
  hello('Mustache');

/*  Hello, you! Part 2
Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously. */

function hello(name) {
    var greeting = 'Hello, ' + name + '!';
    if (name != 'undefined') {
        return 'Hello, world!'
    } else {
        return greeting;
    }
  }
  hello();