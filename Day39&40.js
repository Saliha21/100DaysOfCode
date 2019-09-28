// 39/40-100
// Saliha Almalki
var teachers = {
  Hours: "4",
  Name: "Saliha",
  Subject: "English",
  set name(value){
    this.Name = value;},
  set subject(value){
    this.Subject = value;}}
teachers.subject = "computer science" ;
document.write(teachers.Subject);
document.write("<br>");
teachers.name= "Ahmad" ;
document.write(teachers.Name);
