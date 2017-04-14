//获取div
small=document.getElementById("small");
simg=document.getElementById("simg");
move=document.getElementById("move");
big=document.getElementById("big");
bimg=document.getElementById("bimg");
imgs=document.getElementById("imgs");


//给small绑定一个onmousemove
small.onmousemove=function(e){
    // alert("ss");
    move.style.display="block";
    big.style.display="block";
    move.style.cursor="move";
    //浏览器的兼容
    ee=e||window.event;
    //获取横坐标和纵坐标
    x=ee.clientX;
    y=ee.clientY;
    //获取x1  y1
    x1=small.offsetLeft;
    y1=small.offsetTop;
    //move的自身的宽度和高度的一半
    m_w=move.offsetWidth/2;
    m_h=move.offsetHeight/2;
    l=x-x1-m_w;
    t=y-y1-m_h;
    //范围
    //上
    if(t<0){
        t=0;
    }
    //下
    if(t>small.offsetHeight-move.offsetHeight){
        t=small.offsetHeight-move.offsetHeight;
    }
    //左
    if(l<0){
        l=0;
    }
    //右
    if(l>small.offsetWidth-move.offsetWidth){
        l=small.offsetWidth-move.offsetWidth;
    }
    //把的到left和top值赋给move的left和top值
    move.style.left=l+"px";
    move.style.top=t+"px";
    //求x和y轴比例
    x1=l/small.offsetWidth;
    y1=t/small.offsetHeight;
    //求大图移动的left和top值
    //获取大图的宽度和高度
    b_w=bimg.offsetWidth;
    b_h=bimg.offsetHeight;
    ll=b_w*x1;
    tt=b_h*y1;

    //给bimgleft和top去赋值
    bimg.style.left=-ll+"px";
    bimg.style.top=-tt+"px";

    //重新给move高度和宽度赋值
    x2=big.offsetWidth/bimg.offsetWidth;
    y2=big.offsetHeight/bimg.offsetHeight;
    //获取small的自身的宽度和高度
    s_w=small.offsetWidth;
    s_h=small.offsetHeight;
    m_w=s_w*x2;
    m_h=s_h*y2;
    move.style.width=m_w+"px";
    move.style.height=m_h+"px";
}
//鼠标的移出
small.onmouseout=function(){
    move.style.display="none";
    big.style.display="none";

}
//获取img
list=imgs.getElementsByTagName("img");
//遍历
for(var i=0;i<list.length;i++){
    list[i].onclick=function(){
        src=this.getAttribute("src");
        // alert(src);
        simg.src=src;
        bimg.src=src;
    }
}