//Logical Operators

//Logical 'AND'
console.log(true && false);

//Logical 'OR'
console.log(true || false);

//Logical 'NOT'
console.log(!false);

//Example
var isIndianCitizen = true
var isOlderThanEighteen = false
var eligibleToVote = isIndianCitizen && isOlderThanEighteen
console.log(`Are you eligible to vote in India - ${eligibleToVote}`);