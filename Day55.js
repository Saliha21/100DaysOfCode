// 55 - 100 * Array methods *
var num = [6, 1, 3, 7];
 document.write(num.join()+"<br>");
 document.write(num.reverse()+"<br>"); // يعكس الترتيب
 document.write(num.sort()+"<br>"); // هنا ترتيب لعناصر المصفوفة
var Name1 = ["Sare", "Seren"];
var Name2 = ["Mona", "Saliha"];
// يدمج مصفوقتين 
document.write(Name3 = Name1.concat(Name2)); //Sare,Seren,Mona,Saliha
document.write(Name3.slice(1, 3)); //Seren,Mona
document.write(Name3.slice(2)); //Mona,Saliha
document.write(Name3.slice(-2)); //Mona,Saliha
document.write(Name3.slice(-3,-1)); //Seren,Mona
document.write(Name3.slice(1,-1)); //Seren,Mona