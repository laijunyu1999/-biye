//侧边栏展开收起
$(".ZK").click(function(){
    $(".aside").fadeIn();
    $(this).fadeOut();
});
$(".aside .del").click(function(){
    $(".ZK").fadeIn();
    $(".aside").fadeOut();
});
//设置图片价格
var resImg =  window.sessionStorage.getItem('resImg');
$("#main-l img").attr("src",resImg)
var resPay = window.sessionStorage.getItem('resPay');
$("#main-Pay").html(resPay);
//点击购买跳转
$(".money button").click(function(){
    window.location.href = "../shoppEnd.html";
});