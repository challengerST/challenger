window.onload=function(){
    var box=document.querySelector('.box');
    var boxs=box.children;
    var shareP = document.getElementById('share-p');
    var icon = document.getElementById('icon');
//var randomNum = Math.floor(Math.random()*userName.length);
//var randomNum2 = Math.floor(Math.random()*userPhone.length);
//var iNow = 0;
    var close = document.getElementById('close');
    var selectIcon = '';  //用于保存所选择图片的路径
    var date = new Date();
    var str = toDou(date.getHours()) + ':' + toDou(date.getMinutes()); //获取当前时间
    var str2 = toDou(date.getMonth() + 1) + '-' + date.getDate();  //获取当前日期
    var frUp = document.getElementById('friend-updates');
    console.log(str);
//补0函数
    function toDou(n) {
        if (n < 10) {
            return '0' + n;
        } else {
            return '' + n;
        }
    }
//function removeNode(node) {
//    node.parentNode.removeChild(node);
//}
//删除节点
//    function delete(el){
//        var p = el.parentNode;
//        p.parentNode.removeChild(p);
//    }
    //删除节点
    function del(){
        function removeNode(node) {
            node.parentNode.removeChild(node);
        }
        for(var i=0;i<boxs.length;i++){
            boxs[i].onclick=function(e){
                e=e||window.event;
                var el= e.srcElement;
                switch(el.className){
                    case 'close':
                        removeNode(el.parentNode);
                        break;
                }
            }
        }
    }
    del();
//点击发布按钮
    shareP.onclick = function () {
        frUp.innerHTML += '<div class="box">' +
            '<a id="close" class="close" href="javascript:;">×</a>' +
            '<div class="clearfix" style="line-height:50px;">' +
            '<img class="small-head fl-l" src="img/personal-room/6.jpg" alt=""/>' +
            '<span class="user fl-l host">韩露</span><span class="share host fl-l">分享<i class="music"></i>音乐</span>' +
            '<span class="clock fl-r" id="time">' + str2 + '-' + str + '</span></div>' +
            '<div class="content">' +
            '<div class="main">' +
            '<p class="txt">' +
            '<span class="user">' + '小Y+：' + '</span>' +
            '英国艺术家 Jane Perkins 能利用很多不起眼的东西进行创作，甚至是垃圾。首饰、纽扣、玩具等等都可以作为他创作的工具并创作出惟妙惟肖的画作，丝毫不逊色于色彩丰富的颜料。</p>' +
            '<div class="share-img">' +
            '<img src="img/personal-room/nvz.jpg" alt="">' +
            '<img src="img/personal-room/nvz.jpg" alt="">' +
            '<img src="img/personal-room/nvz.jpg" alt="">' +
            '<img src="img/personal-room/nvz.jpg" alt="">' +
            '</div>' +
            '<div class="ppd">' +
            '<span class="forward"><i></i>转发</span>' +
            '<span class="shu-line"></span>' +
            '<span class="comment"><i></i>评论</span>' +
            '<span class="shu-line"></span>' +
            '<span class="pointpraise"><i></i>点赞</span>' +
            '</div>' +
            '</div>' +
            '<div class="praises-total" total="0" style="display: none;"></div>' +
            '<div class="comment-list">' +
            '</div>' +
            '</div>' +
            '</div>';
        //if(text.value==''||num>140){
        //    timer1 = setInterval(function(){
        //        if(iNow==5){
        //            clearInterval(timer1);
        //            iNow=0;
        //        }else {
        //            iNow++;
        //        }
        //        if(iNow%2){
        //            text.style.background = '#ff9797';
        //        }else{
        //            text.style.background = '';
        //        }
        //    },100);
        //}else {
        //    //判断是否选择头像
        //    if(selectIcon==''){
        //        alert('请先选择头像');
        //    }else {
        //        //动态添加li
        //        var newLi = document.createElement('li');
        //        newLi.innerHTML += '<div class="icon"><img src="'+selectIcon+'" alt=""></div><h2>'+userName[randomNum]+'</h2><p class="text">'+text.value+'</p><div class="li-footer"><span>'+str2+'</span><span> '+str+' </span>来自 <span>'+userPhone[randomNum2]+'</span></div>';
        //        if(aLi.length){
        //            conUl.insertBefore(newLi,aLi[0]);
        //        }else {
        //            conUl.appendChild(newLi);
        //        }
        //        newLi.style.opacity = 0;
        //        fadeOut(newLi,100);
        //    }
        //    change();
        //}
        //text.value = '';
        del();
    };

};
