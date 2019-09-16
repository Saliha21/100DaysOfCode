// 28-100 * Jumps - throw  *
//Saliha Almalki

function division(num1, num2){
  if(num2==0) throw "num2 must not be zero"; 
  // throw statement allows you to create a error messages.
  else 
    return "num1 / num2 = " + ( num1 / num2 );
}
division(4,0); // output: num2 must not be zero

/*
function sum(num1, num2){
  if(num2==0) throw "num2 must not be zero";
  else 
    return "num1 / num2 = " + ( num1 / num2 );
}
sum(4,8);  */
 
 // output: num1 / num2 = 0.5
