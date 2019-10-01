// 42-100 * Adding Properties to object *
// Saliha Almalki
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Person.prototype.nationality = "Arabic";
var myFather = new Person("Mohammed", "AlAli", 50, "Red"); 
document.write ("The nationality of my father is " +
                myFather.nationality);
/*we can not add a new property to an existing object constructor.
to add a new property, we must add it to the constructor function 
or use prototype like the example above */