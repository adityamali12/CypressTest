//Loops

//For Loop
for(let i=1; i<6; i++)
{
    console.log(i);
}

var cars = ['Tesla', 'Tata', 'Toyota']
//For of Loop
for(let car of cars)
{
    console.log(car);
    if(car == 'Tata')
    {
        break;
    }
}

//ES6 Syntax for loop (Arrow function)
cars.forEach(car => {
    console.log(car);
})
