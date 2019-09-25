//35-100 * Inheritance *
//Saliha Almalki
function person(FirstName, LastName, id){ 
  this.FirstName = FirstName; 
  this.LastName = LastName;
}
function employee(FirstName, LastName, jobType, company){ 
  person.call(this, FirstName, LastName);
  this.jobType = jobType; 
  this.company = company;
}
var emp = new employee("Ahmad", "Mohammed", "developer","google"); 
document.write(emp.FirstName+" "+emp.LastName);