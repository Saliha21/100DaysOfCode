// 25 & 26-100 * JavaScript Labels  *
//Saliha Almalki
 labelbreak: for( var i=0; i < 10; i++) {
                  while(i==5){
                         document.write("continue <br>");
                         continue labelbreak;}
                  while(i==8){
                         document.write("break <br>");
                         break labelbreak;}

document.write(i + "<br>");
}
document.write(" We out of a loop");