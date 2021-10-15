var pant;
var ep;
pant="";
ep=document.getElementById("op");

function write (x1) {
	pant=pant+x1;
	ep.innerHTML=pant;
	//linebreak();
}
function write2 (x2){
	er=document.getElementById(x2);
	c2=er.innerHTML;
	pant=pant+c2;
	ep.innerHTML=pant;
	linebreak();
}
function linebreak(){
	if (pant.length==24 || pant.length==52) {
		pant=pant+"<br>";
	}
}
function erase(){
	pant="";
	ep.innerHTML=pant;
}
