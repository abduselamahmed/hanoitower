var x;
var el = ["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10",];
var a1 ;
var a2 ;
var a3 ;
var upper;
var ready = 0;


function getready() {
	upper = [0,0,0];
	a1 = [11];
	a2 = [11];
	a3 = [11];
	upper[0]=x;
	for(i=1;i<=x;i++) {
		a1[i]=x-i+1;
	}
	for(i=3;i<10;i++) {
		var e=document.getElementById(el[i]);
		e.style.visibility="hidden";
	}
	var vc="";
	vc+=(x*15)+10+"px";
	document.getElementById("i").style.height=vc;
	document.getElementById("ii").style.height=vc;
	document.getElementById("iii").style.height=vc;
	vc="";
	vc+=300-(x*15+10)+"px";
	document.getElementById("i").style.top=vc;
	document.getElementById("ii").style.top=vc;
	document.getElementById("iii").style.top=vc;
}

function play() {
	x = document.getElementById('num').value;
	if(x>2&&x<11)
	{
		getready();
	  var e1=document.getElementById('s');
	  e1.style.visibility="hidden";
	  for( i = 0 ; i < x ; i++) {
		var e=document.getElementById(el[i]);
		e.style.visibility="visible";
		var l="";
		var t="";
		l+=100-(10+(i+1)*5)+"px";
		t+=285-((15*x)-(15*(i+1)))+"px";
		e.style.left=l;
		e.style.top=t;
		}		
	}
}

function beg(doro) {
	var n = doro.keyCode;
	if(n==65) {
		work(0);
	}
	if(n==83) {
		work(1);
	}
	if(n==68) {
		work(2);
	}
}

function work(ind) {
	if(upper[ind]!=0&&ready==0) {
		var c=upper[ind];
		var d;
		switch(ind) {
			case 0:
			ready=a1[c];
			break;
			case 1:
			ready=a2[c];
			break;
			case 2:
			ready=a3[c];
			break;
		}
		d=el[ready-1];
		var ne = document.getElementById(d);
		upper[ind]--;
		//ne.style.transition="top .2s ease-in";
		ne.style.top="140px";
	}
	else if(ready!=0) {
		var c=upper[ind];
		var d=el[ready-1];
		switch(ind) {
			case 0:
			if(a1[c]>ready) {a1[++upper[0]]=ready;ready=0;move(c+1,ind,d);}
			break;
			case 1:
			if(a2[c]>ready) {a2[++upper[1]]=ready;ready=0;move(c+1,ind,d);}
			break;
			case 2:
			if(a3[c]>ready) {a3[++upper[2]]=ready;ready=0;move(c+1,ind,d);}
			break;
		}
	}
	if(a3[x]==1) {
		var e1=document.getElementById('s');
	  	e1.style.visibility="visible";
	}
}

function move(a,b,c) {
	var k=document.getElementById(c);
	var l="";
	var t="";
	var i=el.indexOf(c);
	l+=100+(150*b)-(10+(i+1)*5)+"px";
	t+=300-(15*a)+"px";
	//k.style.transition="left .2s ease-in";
	k.style.left=l;
	//k.style.transition="top .2s ease-in";
	k.style.top=t;
}