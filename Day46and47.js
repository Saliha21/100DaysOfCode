// 46/47-100
//Saliha Almalki
var studentName = ["Sara","Manal","Seren","Farah","Alla"];
var GPA = [ 4.03, 3.55 , 5.00, 4.77, 4.94];
var Sara = studentName[0] + " " +GPA[0];
document.write(Sara + "<br>");

//OR

for (var i=0; i < studentName.length && i<GPA.length ; i++){
  
    document.write(studentName[i] + "  " +GPA[i] + "<br>");
}