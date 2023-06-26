// Imported only object instance of the class
import { customer1234 } from '../helpers/helper.js'

//Object.method(arguments);
customer1234.printFirstName('FName');
customer1234.printLastName('LName');

//-----------------------------------------------------

import { Calculator } from '../helpers/helper.js';
// Imported entire class

var cal = new Calculator();

cal.addition(10,5);
cal.subtraction(10,5);
cal.subtraction(5,5);