//给大标题绑定点击事件
var zbts=document.getElementsByClassName("zbt");
for(var i=0;i<zbts.length;i++){
	zbts[i].onclick=function(){
		var span=this.getElementsByTagName("span")[0];
		if(span.innerHTML=="+"){
			this.nextElementSibling.style.height="123px";
			this.style.color="#840812";
			span.innerHTML="-";
			span.style.color="#343434"
		}else{
			this.nextElementSibling.style.height="0";
			span.innerHTML="+";
			this.style.color="#343434";
			for(var j=0;j<tws.length;j++){
			var dy1=lis[j].getAttribute("dy");
			tws[dy1].style.opacity="0";
			lis[j].style.borderBottom="none";
			lis[j].style.color="";
			}
		}
		
	}
}