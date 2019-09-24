//34-100 * this *
//Saliha Almalki
var test1 = {
name: "SALIHA",
func: function() {return this.name;}}

document.write(test1.func() + "<br>");
var x = this;
document.write(x + "<br>");
document.write(this===window);
