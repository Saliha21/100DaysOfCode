// 64 - 100 * call() *
var Car = {
spesification : function(color) {
return this.companyName + " " + this.model + " " + color;}}
var car = {
spesification : function() {
return this.companyName + " " + this.model;}}
var car1 = {
companyName:"toyota",
model:"2014"}
var car2 = {
companyName:"jeeb",
model:"2020"}

document.write(car.spesification.call(car1) + "<br>");
document.write(Car.spesification.call(car2,"white"));