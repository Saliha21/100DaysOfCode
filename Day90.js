// 90-100
var uRl = prompt("Please enter your url");
var url = new URL(uRl); 
var val = prompt("Please enter your value");
var c = url.searchParams.get(val); 
document.write(c);
