// 39/40-100
// Saliha Almalki
function teachers(Hours, Name, Subject){
  this.Hours = Hours 
  this.Name = Name
  this.Subject = Subject
}
function teacher1(Hours, Name, Subject, age){
  teachers.call(this, Hours, Name, Subject) 
   this.age = age
}
var teacher = new teacher1(5, "Ahmad", "Math", 60)
document.write(teacher.Subject + "<br>" + teacher.Name);
var teacher2 = new teacher1(3, "Mohammed", "English", 45)
document.write("<br>" + teacher2.Subject + "<br>" + teacher2.Name);
