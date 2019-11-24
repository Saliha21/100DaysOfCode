// 90-100
var url_string = "http://www.example.com/t.html?a=1&b=3&username=m2-m3-m4-m5";
var url = new URL(url_string); 
var c = url.searchParams.get("a"); 
document.write(c); 
//----------------------------------
var params = (new URL("https://example.com/?name=Jonathan%20Smith&age=18")).searchParams; 
var name = params.get("name");
var age = parseInt(params.get("age"));
document.write(age); 