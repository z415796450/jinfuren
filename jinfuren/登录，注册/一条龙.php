<?php
	$pasd=$_POST["pasd"];
	$hide=$_POST["hide"];
	$name=$_POST["name"];
	if($hide==1){
	$email=$_POST["email"];
	$conn=mysqli_connect("127.0.0.1","root","","h51906",3306);
	$sql="SELECT name FROM login";
	mysqli_query($conn,"SET NAMES UTF8");
	$rs=mysqli_query($conn,$sql);
	while(($row=mysqli_fetch_row($rs))!=null){
		 	if($row[0]==$name){
		 		echo("<script>location='注册后页面.html?失败';</script>");
		 		return false;
		 	}
	}
	echo("<script>location='注册后页面.html?成功';</script>");
	$sql="INSERT INTO login VALUES(0,'$name','$pasd','$email')";
	mysqli_query($conn,$sql);
	mysqli_close($conn);
	}else if($hide==0){
	$conn=mysqli_connect("127.0.0.1","root","","h51906",3306);
	$sql="SELECT name,pasd FROM login";
	mysqli_query($conn,"SET NAMES UTF8");
	$rs=mysqli_query($conn,$sql);
	while(($row=mysqli_fetch_row($rs))!=null){
		 	if($row[0]==$name&&$row[1]==$pasd){
		 		echo("<script>location='登陆后页面.html?成功';</script>");
		 		return false;
		 	}
	}
	echo("<script>location='登陆后页面.html?失败';</script>");
	mysqli_close($conn);
	}else if($hide==2){
		$email=$_POST["email"];
		$newpasd=$_POST["newpasd"];
		$newemail=$_POST["newemail"];
		$conn=mysqli_connect("127.0.0.1","root","","h51906",3306);
		$sql="SELECT name,pasd,email FROM login";
		mysqli_query($conn,"SET NAMES UTF8");
		$rs=mysqli_query($conn,$sql);
		while(($row=mysqli_fetch_row($rs))!=null){
		 	if($row[0]==$name&&$row[1]==$pasd&&$row[2]==$email){
		 		$sql="UPDATE login SET pasd='$newpasd' where name='$name'";
		 		mysqli_query($conn,$sql);
		 		$sql="UPDATE login SET email='$newemail' where name='$name'";
		 		mysqli_query($conn,$sql);
				echo "修改成功";
		 		return false;
		 	}
		}
		echo "旧密码或邮箱输入错误";
		mysqli_close($conn);
	}else if($hide==3){
	$conn=mysqli_connect("127.0.0.1","root","","h51906",3306);
	$sql="SELECT name,pasd FROM login";
	mysqli_query($conn,"SET NAMES UTF8");
	$rs=mysqli_query($conn,$sql);
	while(($row=mysqli_fetch_row($rs))!=null){
		 	if($row[0]==$name&&$row[1]==$pasd){
		 		$sql="DELETE FROM login WHERE name='$name'";
		 		mysqli_query($conn,$sql);
		 		echo "删除成功";
		 		return false;
		 	}
	}
	echo("删除失败");
	mysqli_close($conn);
	}
	
	
?>