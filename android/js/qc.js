var opacity = 0;
// 当页面滚动式，
window.onscroll=function(){
    // 搜索栏的背景色的透明度发生变化，
    // 当滚动距离超过轮播图时，搜索栏的背景色的透明度不再发生变化，固定在0.85
    var top = document.documentElement.scrollTop;
    var height = document.querySelector(".lbt").offsetHeight;
    if(top<height){
        opacity = top/height*0.85;
    }else{
        opacity = 0.85;
    }
    document.querySelector('.header').style.background = 'rgba(53,162,177,'+opacity+')';
}

