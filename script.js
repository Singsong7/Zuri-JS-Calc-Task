alert(' Welcome to My Simple Calc!  \n Press Enter to start calculating.')
// to get your text in alert aligned, put space bars tween each statement

let num1 = prompt('Enter first number:'); //prompt prompts the user literally
const operator =prompt('Enter operator(either +, -,*, / or %)'); //operator is your arithmetic operator
let num2 = prompt('Enter second number:');

num1 = parseFloat(num1) //parsefloat covers decimals too
num2 = parseFloat(num2) //parseint is only integers

let result; //you're using if, else if, and else
if (operator == '+') 
{result = num1 + num2;}

else if (operator == '-')
{result = num1 - num2;}

else if  (operator == '*')
{result = num1 * num2;}

else if  (operator == '/')
{result = num1 / num2;}

else {result = num1 % num2;} // your statement stops at else

alert('Answer = ' + result) //this is a simple way of showing the answer

alert(' Thank you for using my Simple Calc! \n Reload page to perform more calculations. ' )
