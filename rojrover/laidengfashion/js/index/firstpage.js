window.onload = function () {
    var wrap = document.getElementById('wrap'),
        pic1 = document.getElementById('pic1'),
        button1 = document.getElementById('list').getElementsByTagName('li'),
        prev1 = document.getElementById('prev1'),
        next1 = document.getElementById('next1'),
        width1 = wrap.offsetWidth,
        index1 = 0,
        timer1 = null;
    console.log(button1);
    next1.onclick = function () {
        index1++;
        index1 = index1 >= button1.length ? 0 : index1;
        pic1.style.left = -index1 * width1 + 'px';
        showButton1();
    };
    prev1.onclick = function () {
        index1--;
        index1 = index1 < 0 ? 3 : index1;
        pic1.style.left = -index1 * width1 + 'px';
        showButton1();
    };
    //关联下划线
    function showButton1() {
        for (var i = 0; i < button1.length; i++) {
            button1[i].className = '';
        }
        button1[index1].className = "active";
    }
    wrap.onmouseover=function(){
        stop1();
    };
    wrap.onmouseleave=function(){
        play1();
    };
    //控制速度
    function animate1() {

    }
    //定时器
    function play1() {
        timer1 = setInterval(function () {
            next1.onclick();
        },4000)
    }
play1();
    //停止
    function stop1() {
        clearInterval(timer1);
    }
//小圆点控制前后
    for(var i=0;i<button1.length;i++) {
        button1[i].index=i;
        button1[i].onmouseover = function () {
            for(var j=0;j<button1.length;j++){
                button1[j].className='';
            }
            this.className='active';
            pic1.style.left = -parseInt(this.index) * width1 + 'px';
        };
        button1[i].onmouseleave=function(){
            index1=parseInt(this.index);
            next1.onclick(index1);
            prev1.onclick(index1);
            showButton1(index1);
        }
    }

    var column = document.getElementById('column');
    var columnFile = document.getElementById('column-file');
    var Lis = columnFile.getElementsByTagName('li');
    var file = document.getElementsByClassName('cfilename');
    for (var i = 0; i < Lis.length; i++) {
        Lis[i].index = i;
        file[i].onmouseover = function () {
            for (var j = 0; j < Lis.length; j++) {
                file[j].classList.remove('white-red');
            }
            this.classList.add('white-red');
            sdL.html(this.firstChild.nodeValue);
            console.log(this.firstChild.nodeValue);
        }
    }


//    var wrap2 = document.getElementById('wrap2'),
//        pic2 = document.getElementById('pic2'),
//        button2 = document.getElementById('list2').getElementsByTagName('li'),
//        prev2 = document.getElementById('prev2'),
//        next2 = document.getElementById('next2'),
//        width2 = wrap2.offsetWidth,
//        index2 = 0,
//        timer2 = null;
//    console.log(button2);
//    next2.onclick = function () {
//        index2++;
//        index2 = index2 >= button2.length ? 0 : index2;
//        pic2.style.left = -index2 * width2 + 'px';
//        showButton2();
//    };
//    prev2.onclick = function () {
//        index2--;
//        index2 = index2 < 0 ? 2 : index2;
//        pic2.style.left = -index2 * width2 + 'px';
//        showButton2();
//    };
//    //关联下划线
//    function showButton2() {
//        for (var i = 0; i < button2.length; i++) {
//            button2[i].className = '';
//        }
//        button2[index2].className = "active";
//    }
//    wrap2.onmouseover=function(){
//        stop2();
//    };
//    wrap2.onmouseleave=function(){
//        play2();
//    };
//    //控制速度
//    function animate2() {
//
//    }
//    //定时器
//    function play2() {
//        timer2 = setInterval(function () {
//            next2.onclick();
//        },4000)
//    }
//    play2();
//    //停止
//    function stop2() {
//        clearInterval(timer2);
//    }
////小圆点控制前后
//    for(var i=0;i<button2.length;i++) {
//        button2[i].index=i;
//        button2[i].onmouseover = function () {
//            for(var j=0;j<button2.length;j++){
//                button2[j].className='';
//            }
//            this.className='active';
//            pic2.style.left = -parseInt(this.index) * width2 + 'px';
//        };
//        button2[i].onmouseleave=function(){
//            index2=parseInt(this.index);
//            next2.onclick(index2);
//            prev2.onclick(index2);
//            showButton2(index2);
//        }
//    }




















//
////bottom exhabition bar
//    var column=$('#column');
//    var finf=$('#fashion-inf');
//    var tf=$('#trend-forecase');
//    column.on('click',function(){
//
//    });


























//end
};