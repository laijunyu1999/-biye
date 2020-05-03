<?php
	//做成一个总的链接数据库，让demo2直接链接
header('Content-Type:text/html; charset=utf-8');

//数据库连接参数，可以用常量存储，这样就不能修改，更加安全
define('DB_USER','root');
define('DB_PASSWORD','root');
define('DB_HOST','localhost');
define('DB_NAME','testguester');

//连接 MySQL:
$conn = @mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or
die('数据库连接失败！错误信息：'.mysql_error());

//选择你所需要的数据库
@mysql_select_db(DB_NAME) or die(' 数据库找不到！错误信息： '.mysql_error());

//设置字符集，如果是 GBK，直接设置 SET NAMES GBK 即可
@mysql_query('SET NAMES UTF8') or die('字符集设置错误');

?>