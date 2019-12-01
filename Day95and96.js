// 95 and 96 -100
var uRl = prompt("Please enter your url");
var url = new URL(uRl); 
var c = new URLSearchParams(url.search.slice(1));
c.set('username', 'saliha');
c.set('a', 8);
c.set('b', 9);
c.set('city', 'makkah');
document.write(c);