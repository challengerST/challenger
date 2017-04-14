var cds = document.getElementsByClassName('cd');
var shows = document.getElementsByClassName('show');
for (var i = 0; i < cds.length; i++) {
    cds[i].index = i;
    cds[i].onclick = function () {
        for (var j = 0; j < cds.length; j++) {
            //Lis[j].className-='nav';
            cds[j].classList.remove('active');
            var num = this.getAttribute('name');
            num = null ? alert('just try next') : num;
            var getNum = function () {
                return num;
            };
        }
        var tt = getNum();
        console.log(tt);
        for (var i = 0; i < shows.length; i++) {
            //shows[i].style.visibility='hidden';
            $('.show').eq(i).hide();
        }
        $('.show').eq(tt).show();
        this.classList.add('active');
        //num=null ? alert('just try next') : num
        //cds[num].style.display='block';
    };
    //this.className+='nav';
}
function fwd() {
    //转发的弹出框

    var layOut = document.createElement('div'),
        loginK = document.createElement('div');
    layOut.setAttribute('id', 'lay-out');
    loginK.setAttribute('id', 'login-box');
    document.body.appendChild(layOut);
    document.body.appendChild(loginK);
    var NlayOut = document.getElementById('login-box');
    NlayOut.innerHTML = '<form><div class="close-cancle" id="close"><img src="img/common/cancle-img_03.png" alt=""/></div>' +
        '<div class="rfs"><div class="cs"><div class="fb"><textarea type="text" class="" placeholder="为什么分享我呢"></textarea></div><div><input class="sz" type="button" value="确认转发"></div></div></div>' +
        '</form>';
// NlayOut.innerHTML='<div class="close-cancle" id="close"><img src="img/common/cancle-img_03.png" alt=""/></div><div class="clearfix"> <span class="sign-in red-line" id="sign-in">登录</span> <span class="shu-line jubu-edit"></span> <span class="sign-up">注册账号</span> </div> <div style="text-align:center"> <div class="vertify"> <h1>用户名</h1> <input class="font-te" type="text" placeholder="昵称/手机号" id="username"><p style="margin-left:-188px;margin-top:6px;"><i class="caveat"></i><span style="font-size:14px;">请输入正确的密码</span></p> <h1>密码</h1> <input class="font-te" type="password" placeholder="请输入密码" id="setpassword"></div> <div class="clearfix" style="margin-top:10px;width:320px;display:inline-block;"> <span style="float:left;font-size:14px;"> <input type="checkbox" class="fuxuankuang"/>记住我 </span> <span style="float:right;font-size:14px;">忘记密码 </span> <input type="submit" class="rightnow-login" value="立即登录"/> </div> <div class="title-line"> <i class="title-line-left"></i><span class="fenqu">使用合作账号登陆</span><i class="title-line-left"></i> </div> </div> <div class="society"> <a href=""><img src="img/society/wechat.png" alt=""></a> <a href=""><img src="img/society/tencent.png" alt=""></a> <a href=""><img src="img/society/room.png" alt=""></a><a href=""><img src="img/society/weibo.png" alt=""></a> </div>'
    var close = document.getElementById('close');
    close.onclick = function () {
        document.body.removeChild(layOut);
        document.body.removeChild(loginK);
    };
    szs();

}
function szs() {
    $('.sz').on('click', function () {
        function sz() {
            $('.rfs').hide();
            var NlayOut = document.getElementById('login-box');
            NlayOut.innerHTML = '<form><div class="close-cancle" id="close"><img src="img/common/cancle-img_03.png" alt=""/></div>' +
                '<div class="zfs"><span>恭喜您，转发成功！</span></div>' +
                '</form>'
        }

        sz();
        var close = document.getElementById('close');
        close.onclick = function () {
            $('#login-box').hide();
            $('#lay-out').hide();
        }
    })
}
function c() {

    }

//关注
    var Focus = document.getElementsByClassName('focus');

    for (var i = 0; i < Focus.length; i++) {
        Focus[i].index = i;
        Focus[i].onclick = function () {
            console.log(this.index);
            if (Focus[this.index].innerHTML == '+关注') {
                this.innerHTML = '已关注';
                this.classList.add('active');
            } else if (this.innerHTML = '已关注') {
                this.innerHTML = '+关注';
                this.classList.remove('active');
            }
        }
    }

