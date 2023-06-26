//Concat

var price = 50
var product = "Bicycle"
var messageToPrint1 = "The value of this "+product+" is "+price+" dollars"      //Concatination
var messageToPrint2 = `The value of this ${product} is ${price} dollars`        //Interpolation
console.log(messageToPrint1);
console.log(messageToPrint2);