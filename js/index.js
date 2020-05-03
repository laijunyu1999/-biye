$("#camelBook-ul li").mouseover(function(){
    var index = $(this).index();
    $("#camelBook-ul li .camelBook-shade").eq(index).show();
});
$("#camelBook-ul li .camelBook-shade").mouseout(function(){
    $(this).hide();
});

//点击展开
$(".ZK").click(function(){
    $(".aside").fadeIn();
    $(this).fadeOut();
});
$(".aside .del").click(function(){
    $(".ZK").fadeIn();
    $(".aside").fadeOut();
});
//单层往返
$("#mal").click(function(){
    $("#JY").attr("disabled",true);
});
$("#mel").click(function(){
    $("#JY").attr("disabled",false);
});

//旅游攻略
$("#GL li a").mouseover(function(e){
    $("#GL li a").attr("class","");
    $(this).attr("class","a-bg");
    var index = $(this).parent().index();
    $("#strategy-right-img ul").css({
        display:"none"
    });
    $("#strategy-right-img ul").eq(index).css({
        display:"block"
    });
});
//购票选项卡
$(".ticket-left-nav ul li").click(function(){
    var index = $(this).index();
    console.log(index);
    $(".ticket-left-con").css({
        display:"none"
    });
    $(".ticket-left-con").eq(index).css({
        display:"block"
    });
});
//单季热门度假跳转数据储存
$("#DJ ul li a").click(function(){
    var resImg = $(this).children("img").attr("src");
    var resPay = $(this).children("span").children("i").html();
    window.sessionStorage.setItem('resImg',resImg);
    window.sessionStorage.setItem('resPay',resPay);
});
//今日优惠跳转数据储存
$("#YH ul li:first-child").click(function(){
    var resImg = $(this).children("a").children("img").attr("src");
    var resPay = $(this).children(".bg-black").children("b").html();
    window.sessionStorage.setItem('resImg',resImg);
    window.sessionStorage.setItem('resPay',resPay);
});
$("#YH ul li:nth-child(2)").click(function(){
    var resImg = $(this).children("a").children("img").attr("src");
    var resPay = $(this).children("a").children("i").html();
    window.sessionStorage.setItem('resImg',resImg);
    window.sessionStorage.setItem('resPay',resPay);
});
$("#YH ul li:nth-child(3)").click(function(){
    var resImg = $(this).children("a").children("img").attr("src");
    var resPay = $(this).children("a").children("i").html();
    window.sessionStorage.setItem('resImg',resImg);
    window.sessionStorage.setItem('resPay',resPay);
});
//当季景点跳转数据储存
$("#JD ul li").click(function(){
    var resImg = $(this).children("a").children("img").attr("src");
    var resPay = $(this).children("a").children("span").children("i").html();
    window.sessionStorage.setItem('resImg',resImg);
    window.sessionStorage.setItem('resPay',resPay);
    console.log(resImg,resPay);
});