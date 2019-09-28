// 38-100 * getter and setter *
// Saliha Almalki
var person = {
  firstName: "Mohammed",
  lastName: "Alali",
  language: "EN",
  get langGet(){
    return this.language;},
  set langSet(value){
    this.language = value;}}
person.langSet = "AR";
document.write(person.langGet);