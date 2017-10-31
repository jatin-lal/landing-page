lr1=document.getElementById('lr1');
lr2=document.getElementById('lr2');
lr3=document.getElementById('lr3');
var wh=window.innerHeight;
var ww=window.innerWidth;
window.onmousemove=function(e){
	lr1.style.transform="translate3d("+1*-e.clientX/ww*20+"px , "+1*-e.clientY/wh*20+"px , 0px)";
	lr2.style.transform="translate3d("+1*-e.clientX/ww*35+"px , "+1*-e.clientY/wh*35+"px , 0px)";
	lr3.style.transform="translate3d("+1*-e.clientX/ww*50+"px , "+1*-e.clientY/wh*50+"px , 0px)";
}
window.onscroll=function(e){
	document.getElementById('frs').style.transform="translate3d(0px, " + window.scrollY/6 + "px, 0px)";
	document.getElementById('scd').style.transform="translate3d(0px, " + window.scrollY/8 + "px, 0px)"
}