function myFunction(){ 
  var a = 4; // local
  return a * a;}

var a = 4; //global
function myFunction(){
 return a * a;}

function add(){
var counter = 0;
counter += 1;
return counter;}
add();
add();
add();
document.write(add());

var add = (function () {
var counter = 0;
return function () {counter += 1; return counter}
})();

add();
add();
add();
document.write(add());