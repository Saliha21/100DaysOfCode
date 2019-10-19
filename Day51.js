// 51-100 * Iterating array - forEach *
// for loop
var arr = [66 , 83 , 32 , 4 ];
for (var i=0 ; i <arr.length ;i++){
  document.write(arr[i] + "<br>");
}
document.write("–––––––––"+"<br>");
//forEach
var txt = "";
var numbers = [45, 4, 9, 16, 25]; 
numbers.forEach(myFunction);
document.write(txt);
function myFunction(value){
  txt = txt + value + "<br> ";
}