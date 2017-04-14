$('#sign-in').click(function () {
    $('#loRe').show();
});
$('#close').click(function () {
    $('#loRe').hide();
})

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
nchange();
function getNa() {
    return $(this).attr('name');
}
var nameNum = getNa();
var off = {};
var isform;
function sIgnin(){
    $('#username').on({
        focus: function () {
            $(this).css({
                'border-color': '#e6e6e6'
            });
            console.log(nameNum);
        },
        blur: function () {
            var val = $(this).val();
            isinput(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(val), this);
        }
    });
    $('#setpassword').on({
        focus: function () {
            $(this).css({
                'border-color': '#e6e6e6'
            });
        },
        blur: function () {
            var val = $(this).val();
            isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val), this);
        }
    });
}
function sIgnUp(){
    $('#username').on({
        focus: function () {
            $(this).css({
                'border-color': '#e6e6e6'
            });
            console.log(nameNum);
        },
        blur: function () {
            var val = $(this).val();
            isinput(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(val), this);
        }
    });
    $('input[name=lpassword]').on({
        focus: function () {
            $(this).css({
                'border-color': '#e6e6e6'
            });
        },
        blur: function () {
            var val = $(this).val();
            isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val), this);
        }
    });
    $('#resPass').on({
        focus: function () {
            $(this).css({
                'border-color': '#e6e6e6'
            });
        },
        blur: function () {
            var val = $(this).val();
            isinput(val == '' ? false : val === $('input[name=lpassword]').val(), this)
        }
    });
}

$('#newPassword').on({
    focus: function () {
        $(this).css({
            'border-color': '#e6e6e6'
        });
    },
    blur: function () {
        var val = $(this).val();
        isinput(/^[a-zA-Z0-9][\w]{5,19}/.test(val), this);
    }
});
$('#surePassword').on({
    focus: function () {
        $(this).css({
            'border-color': '#e6e6e6'
        });
    },
    blur: function () {
        var val = $(this).val();
        isinput(val == '' ? false : val === $('input[name=lpassword]').val(), this)
    }
});
$('input[name=lemail]').on({
    focus: function () {
        $(this).css({
            'border-color': '#e6e6e6'
        })
    },
    blur: function () {
        var val = $(this).val();
        isinput(/^[a-zA-Z0-9][\w]{5,17}@[a-z0-9]{2,6}(\.[a-z]{2,3}){1,2}$/.test(val), this);

    }
});


$('input[name=lphone]').on({
    focus: function () {
        $(this).css({
            'border-color': '#e6e6e6'
        })
    },
    blur: function () {
        var val = $(this).val();
        isinput(/^1[34578]\d{9}$/.test(val), this);
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
}

function switchlock() {
    console.log(isform);
    isform = true;
    if (isform) {
        $('form input').blur();
        if ($('#rmme').attr('checked') == undefined) {
            alert('请选择');
            isform = false;
        }
    }
    for (var i in off) {
        if (!off[i]) {
            isform = false;
        }
    }
}
//  注册验证与后台模板链接
function submitLogin() {
    $('#userSigninLogin').val($('#username').val());
    $('#userSigninPassword').val($('#setpassword').val());
    $('[data-request=onSignin]').request();
}
$('.rightnow-login').click(function (){
    sIgnin();
    isinput();
    switchlock();
    if (isform) {
        console.log(isform);
        submitLogin();
    }
    else {
        alert('请以正确格式输入')
    }
});
//    注册验证与后台模板链接
function submitRegist() {
    $('#registerEmail').val($('#form-phone').val());
    $('#registerPassword').val($('#resPass').val());
    $('[data-request=onRegister]').request();
}
$('#register').click(function () {
    sIgnUp();
    isinput();
    switchlock();
    if (isform) {
        console.log(isform);
        submitRegist();
    }
    else {
        alert('请以正确格式输入')
    }
});
//    确认密码与后台链接
function submitUpdate() {
    $('#accoutPassword').val($('#newPassword').val());
    $('#accoutPasswordConfirm').val($('#surePassword').val());
    $('[data-request=onUpdate]').request();
}
$('#confSave').click(function () {
    switchlock();
    if (isform) {
        console.log(isform);
        submitUpdate();
    }
    else {
        alert('请以正确格式输入')
    }
});
//返回
function submitBack() {
    $('[data-request=onLogout]').request();
}

