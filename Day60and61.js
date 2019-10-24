// 60/61 - 100 
var first = [1, 2, 3, 5, 8, 13];
var second = [1, 2, 3, 4, 8, 13];
if (first.length == second.length) {
  for(var i=0 ; i<first.length ; i++) {
    if(first[i]!=second[i]) {
      var a = first.indexOf(first[i]);
      var b = second.indexOf(second[i]);
          document.write("The index of different value in the first array is : "+ a + "<br>");
          document.write("The index of different value in the second array is : "+ b + "<br>");
          document.write("The value in the first array is : "+ first[i] + "<br>");
          document.write("The value in the second array is : "+second[i] + "<br>");
 }}}