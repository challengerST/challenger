$(function(){
    var signIn = $('#sign-in');
    signIn.click(function () {
        $('#lay-out').parent().show();
        var close = $('#close').find('img');
        close.click(function(){
            $('#login-box').parent().hide();
        });
        nchange();
        relogin();
        register();
    });
//切换
    function nchange() {
        var SignIn = $('#login');
        var SignUp = $('#sign-Up');
        var ncg1 = $('#ncg1');
        var ncg2 = $('#ncg2');
        SignIn.on('click', function () {
            SignIn.addClass('red-line');
            SignUp.removeClass('red-line');
            ncg1.show();
            ncg2.hide();
        });
        SignUp.on('click', function () {
            SignUp.addClass('red-line');
            SignIn.removeClass('red-line');
            ncg2.show();
            ncg1.hide();
        })
    }
    function relogin() {
        $('.errors').hide();
        var off = {};
// 开关对象
//用户名
        $('#username').on({
            focus: function () {
                $(this).css({
                    'border-color': '#e6e6e6'
                });
                $(this).next().hide();
                $(this).val('');
            },
            blur: function () {
                var val = $(this).val();
                isinput(/[\w]{6,20}/.test(val), this);
                if(!off["font-te"]) $(this).next().show();
            }
        });
        $('#setpassword').on({
            focus: function () {
                $(this).css({
                    'border-color': '#e6e6e6'
                });
                $(this).next().hide();
                $(this).val('');
            },
            blur: function () {
                var val = $(this).val();
                isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val), this);
                if(!off["font-te"]) $(this).next().show();
            }
        });
        function isinput(put, content) {
            if (put) {
                $(content).css({
                    'border-color': '#e6e6e6'
                });
                off[content.className] = true
            } else {
                $(content).css({
                    'border-color': '#ff3250'
                });
                off[content.className] = false;
            }
            console.log(off);
        }
//提交
        $('#submit').click(function () {
            //location.href = 'personal-center.html';
            var isform = true;
            if (isform) {
                $('form input').blur();
                if ($('#rmme').attr('checked') == undefined) {
                    alert('请选择');
                    isform = false;
                }
            }
            for (var i in off){
                if (!off[i]){
                    isform = false;
                }
            }
            if (isform){
                var fc=$('#lgs').find('#sign-in');
                var ph=$('.phead');
                fc.html('<div><a href="personal-center.html"><img alt="头像" src="img/dpc/1.jpg" class="phead" style=""></a></a></div>');
                $('.login').css({'border':'none','paddingLeft':'1px','boxSizing':'box-border'});
                $('#login-box').hide();
                $('#lay-out').hide();
                ph.on('click',function(){
                    window.location.href = '##';
                });
            }
            else{
                alert('请以正确格式输入')
            }
        })
    }
//验证码倒计时
    function countdown() {
        var btn_getcode = $("#getPhoneCode");
        var time = 120;
        var timer;
        btn_getcode.html(time + 's后重新获取').addClass('btn-code-disable');
        timer = setInterval(function () {
            time--;
            btn_getcode.html(time + 's后重新获取');
            if (time == 0) {
                clearInterval(timer);
                btn_getcode.html('获取验证码').removeClass('btn-code-disable');
                $('#getPhoneCode').removeAttr('disabled');

                //btn_getcode.bind('click.phonecode', get);
            }
        }, 1000);
        //取消点击事件
        //btn_getcode.off('click.phonecode');
    }
//注册
    function register() {
        var off = {};
        $('form input[name=lname]').on({
            focus: function () {
                $(this).css({
                    'border-color': '#e6e6e6'
                });
                $(this).next().hide();
                $(this).val('');
            },
            blur: function () {
                var val = $(this).val();
                isinput(/[\w]{6,20}/.test(val), this);
                if(!off["font-te"]) $(this).next().show();
            }
        });
        $('form input[name=lpassword]').on({
            focus: function () {
                $(this).css({
                    'border-color': '#e6e6e6'
                });
                $(this).next().hide();
                $(this).val('');
            },
            blur: function () {
                var val = $(this).val();
                isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val), this);
                if(!off["font-te"]) $(this).next().show();
            }
        });


        $('form #r2').on({
            focus: function () {
                $(this).css({
                    'border-color': '#e6e6e6'
                });
                $(this).next().hide();
                $(this).val('');
            },
            blur: function () {
                var val = $(this).val();
                isinput(val == '' ? false : val === $('form input[name=lpassword]').val(), this);
                if(!off["font-te"]) $(this).next().show();
            }
        });

        $('form input[name=lemail]').on({
            focus: function () {
                $(this).css({
                    'border-color': '#e6e6e6'
                });
                $(this).next().hide();
                $(this).val('');
            },
            blur: function () {
                var val = $(this).val();
                isinput(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test(val), this);
                if(!off["font-te"]) $(this).next().show();
            }
        });


        $('form input[name=lphone]').on({
            focus: function () {
                $(this).css({
                    'border-color': '#e6e6e6'
                });
                $(this).next().hide();
                $(this).val('');
            },
            blur: function () {
                var val = $(this).val();
                isinput(/^1[34578]\d{9}$/.test(val), this);
                if(!off["font-te"]) $(this).next().show();
            }
        });


        function isinput(put, _this) {
            if (put) {
                $(_this).css({
                    'border-color': '#e6e6e6'
                });
                off[_this.className] = true
            } else {
                $(_this).css({
                    'border-color': '#ff3250'
                });
                off[_this.className] = false;
            }
        }
        $('form .signin').click(function () {
            var isform = true;
            if (isform) {
                $('form input').blur();
            }
            for (var i in off) {
                if (!off[i]) {
                    isform = false;
                }
            }
            console.log(isform);
            if (isform) {
                $.ajax({
                    type: 'post',
                    url: '',
                    dataType: 'jsonp',
                    data: $('form').serialize(),
                    success: function (data) {
                        alert(data.resultCode);
                        if (data.resultCode == '0000') {

                        } else {
                            alert('失败');
                        }
                    }
                })
            }
        });

    }
})



//var setpassword=document.getElementById('setpassword');
//var userName=document.getElementById('username');


