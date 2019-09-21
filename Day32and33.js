// 32/33-100 
// Saliha Almalki
function division(num1, num2){
  if(num2==0) throw "num2 must not be zero"; 
  else 
    return "num1 / num2 = " + ( num1 / num2 );}
try{
var n = Number(prompt("ENTER NUMBER", "")); 
  division(4,n);
} catch(y){document.write(y)}
finally{
alert("Finally, I got it");
}