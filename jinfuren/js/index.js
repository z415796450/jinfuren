var bigbox=document.getElementsByClassName("bigbox")[0];
				var imgbox=bigbox.getElementsByClassName("imgbox")[0];
				var imgs=imgbox.children;
				var btns=bigbox.getElementsByTagName("button");
				var k=0;
				var lis=bigbox.getElementsByTagName("li");
				for(var i=0;i<btns.length;i++){
					btns[i].onclick=function(){
						if(this.innerHTML=="&lt;"){
								jj(0);
						}else{
								lis[k].style.background="#32CD32";
							jj(1);
						}
						
					}
				}
				for(var i=0;i<lis.length;i++){
					lis[i].onclick=function(){
						k=this.getAttribute("py");
							jj(k);
					}
				}
				var timer=setInterval(function(){
						jj(1);
				},3000)
				imgbox.onmouseover=function(){
					clearInterval(timer);
					timer=null;
				}
				imgbox.onmouseout=function(){
					timer=setInterval(function(){
						jj(1);
				},3000)
				}
				function jj(x){
					if(x===0){
						k--;
							if(k<0){
								k=2;
							}
					}else if(x===1){
							k++;
							if(k>2){
								k=0;
							}
					}
					for(var i=0;i<imgs.length;i++){
								imgs[i].className="";
								lis[i].style.background="";
						}
							imgs[k].className="active";
							lis[k].style.background="#32CD32";
				}