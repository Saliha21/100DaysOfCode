// 53/54-100 
var Name = []; 
var jobRole = [];
var experience = [];

for (var j = 0; j < 3; j++) {
  var name = prompt('Enter employee name ');
  Name.push(name);
  var job = prompt('Enter employee job ');
  jobRole.push(job);
  var exp = prompt('Enter employee experience');
  experience.push(exp);
}
document.write("<b>Name : </b>"+ Name + "<br>" + "<b>Job : </b>" + jobRole + "<br>" + "<b>Experience : </b>" + experience);
document.write("<br>");
for (var i = 0 ; i<experience.length ; i++){
  if(experience[i] > 3){
    document.write("<b>Name : </b>"+ Name[i] + "<br>" + "<b>Job : </b>" + jobRole[i] + "<br>" + "<b>Experience : </b>" + experience[i]+"<br>");
  }
}
document.write("<br>");
for (var i = 0 ; i<Name.length ; i++){
  if(Name[i] == "saad"){
    
    delete Name[i] 
    delete jobRole[i] 
    delete experience[i]
  }
}
document.write("<b>Name : </b>"+ Name + "<br>" + "<b>Job : </b>" + jobRole + "<br>" + "<b>Experience : </b>" + experience);