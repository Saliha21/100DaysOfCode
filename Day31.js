// 30-100 * Object with method *
// Saliha Almalki
var clothes={type:"pant", 
             size:"30", 
             color:"red" , 
             brand:"Lacoste",
             IBought : function() {
             return " I bought a " + 
               this.color + " " + 
               this.type;}};// define the object
             
document.write("<br>"+clothes.IBought());
