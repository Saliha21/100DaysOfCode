//36-100 * Deleting Properties *
//Saliha Almalki
var car = {
  name: "BMW", 
  color: "White",
  price: 300 }
document.write(car.name+"<br>"); 
delete car.color; 
// we use delete operator to delete the Properties from object.
document.write(car.color+"<br>");