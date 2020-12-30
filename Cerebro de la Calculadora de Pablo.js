var pant;
var ep;
pant="";
ep=document.getElementById("op");

function escribir (x1) {
	pant=pant+x1;
	ep.innerHTML=pant;
	saltodelinea();
}
function escribir2 (x2){
	er=document.getElementById(x2);
	c=er.innerHTML;
	pant=pant+c;
	ep.innerHTML=pant;
	saltodelinea();
}
function saltodelinea(){
	if (pant.length==24 || pant.length==52) {
		pant=pant+"<br>";
	}
}
function borrar(){
	pant="";
	ep.innerHTML=pant;
}
