//63-100 * function *
function myFunction(a, b) {
return a * b;
}
var x = myFunction(4, 3); // هنا ممكن أن نخزن قيمة الدالة داخل متغير 
document.write(x);

document.write("<br>");

(function s() { // كذلك نستطيع جعل الدالة تقوم باستدعاء نفسها حيث يتم تنفيدها مباشرة
document.write("Hello! I called myself"+"<br>");
})();

// built-in JavaScript function constructor
var myFunction = function (a, b) {return a * b}
document.write(myFunction(4, 3) + "<br>");

var myFunction = new Function("a", "b", "return a * b");
document.write(myFunction(4, 3));