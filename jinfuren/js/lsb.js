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
//给列表里的标题绑定点击事件
var ul1=zbts[0].nextElementSibling;
var lis=ul1.children;
var tws=document.getElementsByClassName("tuwen");
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		var dy=this.getAttribute("dy");
//		console.log(this.style.color)
		if(this.style.color==""){
			for(var j=0;j<tws.length;j++){
				var dy1=lis[j].getAttribute("dy");
				tws[dy1].style.opacity="0";
				lis[j].style.borderBottom="none";
				lis[j].style.color="";
			}
			tws[dy].style.opacity="1";
			this.style.color="#850913";
			this.style.borderBottom="1px solid #999999";
//			console.log(this.style.color)
		}
		if(this.style.color=="#850913"){
			tws[dy].style.opacity="0";
			this.style.borderBottom="none";
			this.style.color="";
	}
}
}