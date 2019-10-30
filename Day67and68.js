// 67/68 - 100 
// JavaScript Memoization For Improved Application Performance.
function caching(){
  this.cache = {}
}
caching.prototype.check = function check(value){
  if (value in this.cache){
    document.write( value + " cached " + "<br>")
  }else{
    this.cache[value] = value;
    document.write(value + " not cached " + "<br>")
  }
}
var value2 = new caching();
value2.check('sal')
value2.check('sal')

var value1 = new caching();
value1.check(4)
value1.check(4)