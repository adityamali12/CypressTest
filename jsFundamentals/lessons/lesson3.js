//objects

var customer = {
    firstName: 'John',
    lastName: 'Smith'
}
console.log(customer);
console.log(customer.firstName, customer.lastName);
console.log(customer['firstName']);

//Dot Notation
customer.firstName = "Fname1";
//Bracket Notation
customer['lastName'] = "Lname1";
console.log(customer);
console.log(`${customer.firstName} ${customer['lastName']}`);  //Using Interpolation

//Arrays

var car = ['Tesla', 'Tata', 'Toyota']
car[0] = 'BMW'      //Indexing
console.log(car);


//Object with Array

var newCustomer = {
    firstName: 'John',
    lastName: 'Doe',
    car: ['Tesla', 'Tata', 'Toyota']
}
newCustomer.car[0] = 'Suzuki'
console.log(newCustomer);
