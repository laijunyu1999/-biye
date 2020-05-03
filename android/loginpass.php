<?php
session_start();
include "demo1.php";
$username = trim($_POST['username']);
//$password = sha1(trim($_POST['password']));  //md5   sha1

// $query = "select username,password from user where username='$username' and password='$password' limit 1";
$query = "select * from user where username='$username'";
$result = mysql_query($query);
if(mysql_fetch_array($result)){
	echo "<script>alert('登录成功！');location.href='qc.html';</script>";
}else{echo "<script>alert('登录失败!！');location.href='jd.html';</script>";}


?>