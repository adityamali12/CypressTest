//Declarative Function
//Declarative function can be called before or after the declaration

helloOne();
function helloOne(){
    console.log('Hello One!');
}

//Anonyms Function
//Anonyms function can be called before or after the declaration
var helloTwo = function(){
    console.log('Hello Two!');
}
helloTwo();

//ES6 Syntax or Arrow function
var funHelloThree = () => {
    console.log('Hello Three!');
}
funHelloThree();

//Function with Arguments
function helloFour(firstName, lastName){
    console.log(firstName, lastName);
}

helloFour();
helloFour('hi');
helloFour('Fname', 'Lname');

//Function with Return

function multiplyByTwo(num){
    var x = num*2
    console.log('multiplication is -', x);
    return x
}

var intoTwo = multiplyByTwo(5);
console.log(intoTwo);