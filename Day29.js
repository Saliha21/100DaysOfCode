// 29-100 *Jumps - try, catch, finally*
var num1;
function positive(num1) {
if (num1>= 0) return num1;
else throw "x must not be negative";
}
try {
var num2 = Number(prompt("Please enter a positive integer", "")); positive(num2);
alert(num2 + " is positive"); } catch (y) {
alert(y); //document.write(y); 
}
finally{
alert("Finally, I got it");
}

  