var zbt=document.getElementsByClassName("zbt")[0];
var lis=zbt.getElementsByTagName("li");
var boxda=document.getElementsByClassName("boxda");
var span=zbt.getElementsByTagName("span");
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		var dy=this.getAttribute("dy");
		if(this.style.color==""){
			for(var j=0;j<boxda.length;j++){
				var dy1=lis[j].getAttribute("dy");
				boxda[dy1].style.opacity="0";
				lis[j].style.color="";
				span[j].innerHTML="+"
			}
			boxda[dy].style.opacity="1";
			this.style.color="#850913";
			span[dy].innerHTML="-";
		}
		if(this.style.color=="#850913"){
			boxda[dy].style.opacity="0";
			this.style.color="";
	}
	}
}