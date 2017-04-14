/**
 * Created by XVTOP003 on 2016/12/7.
 */

var off={};
//网站名称
$('#site_name').on({
    focus:function(){
        $(this).css({
            'border-color':'rgb(112,173,70)'
        });
    },
    blur:function(){
        var val=$(this).val();
        isinput(/[\u4e00-\u9fa5]/gm.test(val),this);
    }
});
//网站域名
$('#site_url').on({
    focus:function(){
        $(this).css({
            'border-color':'rgb(112,173,70)'
        });
    },
    blur:function(){
        var val=$(this).val();
        isinput(/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/.test(val),this);
    }
});
//网站标题
$('#site_title').on({
    focus:function(){
        $(this).css({
            'border-color':'rgb(112,173,70)'
        });
    },
    blur:function(){
        var val=$(this).val();
        isinput(/[\u4e00-\u9fa5]/gm.test(val),this);
    }
});
//关键字
$('#site_keywords').on({
    focus:function(){
        $(this).css({
            'border-color':'rgb(112,173,70)'
        });
    },
    blur:function(){
        var val=$(this).val();
        isinput(/[\u4e00-\u9fa5]/gm.test(val),this);
    }
});
//网站描述
$('#site_description').on({
    focus:function(){
        $(this).css({
            'border-color':'rgb(112,173,70)'
        });
    },
    blur:function(){
        var val=$(this).val();
        isinput(/[\u4e00-\u9fa5]/gm.test(val),this);
    }
});
//以卡办卡
//一级提成
$('#first_level').on({
    focus:function(){
        $(this).css({
            'border-color':'rgb(112,173,70)'
        });
    },
    blur:function(){
        var val=$(this).val();
        isinput(/^\d+(\.\d{1,2})?$/.test(val),this);
    }
});
//二级提成
$('#second_level').on({
    focus:function(){
        $(this).css({
            'border-color':'rgb(112,173,70)'
        });
    },
    blur:function(){
        var val=$(this).val();
        isinput(/^\d+(\.\d{1,2})?$/.test(val),this);
    }
});
//业务总额
$('#total_business').on({
    focus:function(){
        $(this).css({
            'border-color':'rgb(112,173,70)'
        });
    },
    blur:function(){
        var val=$(this).val();
        isinput(/^\d+(\.\d{1,2})?$/.test(val),this);
    }
});
//全局函数
function  isinput(put,_this){
    if(put){
        $(_this).css({
            'border-color': 'rgb(112, 173, 70)'
        });
        off[_this.className]=true
    }else{
        $(_this).css({
            'border-color': '#981616'
        });
        off[_this.className]=false;
    }
}
$('form .submit').click(function(){
    var isform=true;
    if(isform){
        $('form input').blur();
    }
    for(var i in off){
        if(!off[i]){
            isform=false;
        }
    }
    console.log(isform);
    if(isform){
        $.ajax({
            type:'post',
            url:'/action/settings',
            dataType:'json',
            data:$('form').serialize(),
            contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
            success:function(data){
                console.log(data);
            },
            error:function(data){
                alert('失败')
            }
        })
    }
});