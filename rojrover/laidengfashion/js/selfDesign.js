$(function () {
    $('#tp').click(function () {
        $('#tp-box').fadeIn('slow');
        $('#lay-out').fadeIn('slow');
        $('.dp').val('');
        $('.ln').val('');
        $('.lp').val('');
    });
    $('#close').click(function () {
        $('#tp-box').fadeOut('slow');
        $('#lay-out').fadeOut('slow');
    });
    $('#p-cle').click(function () {
        $('#tp-box').fadeOut('slow');
        $('#lay-out').fadeOut('slow');
    });
    $('.ww').click(function () {
        $(this).parent().parent().parent().fadeOut('fast');
    });
    //    $('.selfDesigned_adress').find('input').val('tt');
    $('#p-cure').click(function () {
        var dp = $('.dp').val();
        var ln = $('.ln').val();
        var lp = $('.lp').val();

        function build() {
            $('<div class="selfDesigned_location fl-l">' +
                '<div class="big-child">' +
                '<P class="">' +
                '<input class="name" placeholder=' + ln + '>' +
                '<input class="phoneNum" placeholder=' + lp + '>' +
                '<a href="javascript:void(0)" class=""><i class="setasDefault"></i></a>' +
                '</P>' +
                '<p class="selfDesigned_dividline">' +
                '</p>' +
                '<P class="selfDesigned_adress"><input class="" placeholder=' + dp + '></P>' +
                '<p class="cd-edit clearfix">' +
                '<span class="fl-l">修改</span><img class="ww fl-r" src="img/personal-center/pm/3.png" alt="">' +
                '</p>' +
                '</div>' +
                '</div>').appendTo('.selfDesigned_largebox');
            $('.ww').click(function () {
                $(this).parent().parent().parent().fadeOut('fast');
            });
        }
        build();
        $('#tp-box').fadeOut('slow');
        $('#lay-out').fadeOut('slow');
    });
    //控制我的定制显示
    $('.selfClothDesign_area').find('a').click(function () {
        $('.my_design').show().prev().hide();
    });
    function myDesign(obj) {
        $('.selfDesign_empty').hide();
        $('.my_design').fadeIn().prev().hide();
        $('.designer').hide();
        $(obj).parent().removeClass('unactive').siblings().addClass('unactive');
    };
    //我的订制
    $('#selfdesign_morder').click(function () {
        myDesign(this);
    });
    //私人定制
    function selfDesign(obj){
        $('.selfDesign_empty').hide();
        $('.self_design').fadeIn().next().hide();
        $('.designer').hide();
        $(obj).parent().removeClass('unactive').siblings().addClass('unactive');
    }
    $('#selfdesign_porder').click(function () {
        selfDesign(this);
    });
    //设计师定制
    function designerDesign(obj){
        $('.selfDesign_empty').hide();
        $('.self_design').hide();
        $('.my_design').hide();
        $('#designer').find('.designer').fadeIn();
        $(obj).parent().removeClass('unactive').siblings().addClass('unactive');
    }
    $('#selfdesign_designer').click(function () {
        designerDesign(this);
    });
    $('.mydesIgN').click(function () {
        $('.mydesign_index').show().nextAll().hide();
    });
    function aractive(obj) {
        $(obj).addClass('active').siblings().removeClass('active');
    }
    $('.self_design_tool div').click(function () {
        aractive(this);
    });
    $('.selfrequires_groups .fl-l span').click(function () {
        aractive(this);
    });
    $('.selfrequires_clarify_column .fl-l').click(function () {
        aractive(this);
    });
    $('.preview_box').find('textarea').on({
        focus: function () {
        },
        input: function () {
            $(this).next().find('span').html('完成').css('color', '#ff3250');
            $(this).val() == '' ? $(this).next().find('span').html('修改').css('color', '#525252') : $(this).next().find('span').html('完成');
            console.log($(this).val());
        },
        blur: function () {
            if ($(this).val() == '') {
                //$(this).val('该区域不可为空');
            } else {
                var tt = $(this).val();
                console.log(tt);
            }
        }
    });
    $('.preview_box').find('textarea').next().find('span').click(function () {
        if ($(this).html() == '完成') {
            $(this).html('修改').css('color', '#525252');
        }
    });
    $('.selfClothDesign_colorList').find('div').click(function () {
        aractive(this);
        var newcolor = $(this).children(':first').css('backgroundColor');
        $(this).find('.word').css('color', newcolor);
    });
    $('.selfClothDesign_materialsList').find('span').click(function () {
        aractive(this);
    });
    $('.self_design_tool').find('div').click(function () {
        var tnum = $(this).attr('name');
        $('.sq').hide().eq(tnum).show();
    });
    $('.prepaid').find('.save').click(function () {
        $(this).parent().parent().hide().next().fadeIn();
    });
    function colmaterial() {
        var scmMaterial = $('.selfClothDesign_materialsList').find('.active').html();
        var scmColor = $('.selfClothDesign_colorList').find('.active').find('.word').html();
        var scmSize = $('.selfClothDesignSize_detailinfo').find('.active').find('span').eq(0).html();
        if (scmColor !== null && scmMaterial !== null) {
            var color = '<div class="NumList_color fl-l"> <span>' + scmColor + '</span> </div>';
            var material = '<div class="NumList_material fl-l"> <span>' + scmMaterial + '</span></div>';
            var size = '<div class="NumList_size fl-l"> <span>' + scmSize + '</span></div>';
            var singlep = '<div class="NumList_count fl-l"><i class="red-font font-24">￥</i><span class="font-24 red-font">499</span> </div>';
            $('.addcolor_material').before('<div class="selfClothDesign_NumList clearfix">' + color + material + size + '<div class="NumList_controller fl-l">'
                + '<span class="reduce"></span>' +
                '<span class="font-eg" style="margin:0px 6px 0 6px;vertical-align:1px;">1</span>' +
                '<span class="plus"></span>' +
                '</div>' + singlep +
                '<div class="NumList_pay fl-l">' +
                '<span><a href="javascript:void(0)" class="red-font">面料定金</a></span> <span><a href="javascript:void(0)" class="close_medu">/ 取消订单</a></span>' +
                '</div>' +
                '</div>');
            if ($('.selfClothDesign_NumList').length > 0) {
                $('.selfClothDesign_colorList').find('div').removeClass('active');
                $('.selfClothDesign_materialsList').find('span').removeClass('active');
            }
            $('#color_001').attr('name', '');
            $('.close_medu').click(function () {
                $(this).parent().parent().parent().hide();
            });
        } else {
            $('#color_001').attr('name', 'color_001');
            console.log($('#color_001').attr('name'));
        }
        control();
    }
    $('.selfClothDesignSize_detailinfo').find('.selfClothDesignSize_info').click(function () {
        colmaterial();
    });
    $('.addcolor_material').click(function () {
        colmaterial();
    });
    $('#close').click(function () {
        $('#lay-out').hide();
        $('#tp-box').hide();
    });
    $('.selfDesigned_defaultdir').find('span').click(function () {
        $('.sst').hide();
        $('.selfDesigned_box').hide();
        $('.selfClothDesign_area').fadeIn();
    });
    $('.mydesign_requires').click(function () {
        $('.mydesignRequire').fadeIn().siblings().hide();
    });
    $('.mydesign_sketch').click(function () {
        $('.mydesignDesign').fadeIn().siblings().hide();
    });
    $('.mydesign_plate').click(function () {
        $('.mydesignPlate').fadeIn().siblings().hide();
    });
    $('.selfClothDesignSize_detailinfo').find('.selfClothDesignSize_info').hover(function () {
        aractive(this);
    });
    function control() {
        var price = $('.NumList_count').find('span').html();
        var num = $('.reduce').next().html();
        $('.reduce').click(function () {
            console.log('reduce' + price);
            if (num > 1) {
                num--;
            } else {
                num = 1;
            }
            sub();
        });
        $('.plus').click(function () {
            console.log('plus' + price);
            num++;
            sub();
        });
        function sub() {
            var newnum = num;
            var total = newnum * price;
            $('.reduce').next().html(newnum);
            $('.NumList_count').find('span').html(total);
        }

        //计算总值
    }

    //修改服装设计图次数控制
    $('.editsketch a').eq(0).click(function () {
        var counter = $('.editsketch').find('i').html();
        console.log(counter);
        counter > 0 ? counter-- : 0;
        $('.editsketch').find('i').html(counter);
        if (counter == 0) {
            $('.editsketch').find('div').eq(0).hide();
        }
    });
//修改样衣次数控制
    $('.editpay a').eq(0).click(function () {
        var counter = $('.editpay').find('i').html();
        console.log(counter);
        counter > 0 ? counter-- : 0;
        $('.editpay').find('i').html(counter);
        if (counter == 0) {
            $('.editpay').css('paddingLeft', '356px').find('.fl-l').eq(0).hide();
        }
    });
//我的定制
    $('.mydesign_completed').click(function () {
        $(this).find('.mydesign_greyword').parent().show().delay(3000).fadeOut(800);
    });
    $('.mydesign_distribution').click(function () {
        $(this).find('.mydesign_shiping').parent().show().delay(3000).fadeOut(800);
    });
//私人订制
    $('.selfDesign_empty').find('a[name=selfdesign]').click(function(){
        $(this).parent().parent().parent().hide();
        $(this).parent().parent().parent().next().fadeIn();
        $('#selfdesign_porder').trigger('click');
    });
//设计师定制部分
    design();
    function design(){
        var interval,index,i=0;
        //设计师定制
        var length=$('.designer_controller').find('a').length;
        console.log(length);
        function designNext(){

        }
        console.log(length);
        //启动页面加载定时器
        function designShow(){
            console.log();
            $('.designer_controller').find('span').eq(i).addClass('active').parent().siblings().find('span').removeClass('active');
            $('.designerDesign').find('.designer_imgbar').eq(i).fadeIn(2000).siblings().hide();
            i++;
            if(i>length-1){
                i=0;
            }
        }
        interval=setInterval(designShow,4000);
        //移入时停止
        $('.designerDesign').find('.designer_imgbar').find('.fl-l').on({
            mouseenter:function(){
                clearInterval(interval);
            },
            mouseleave:function(){
                interval=setInterval(designShow,4000);
            }
        });
        //鼠标悬浮到控制器的时候停掉计时器
        $('.designer_controller').find('a').on({
            mouseenter:function() {
                clearInterval(interval);
               index = $(this).index();
                $(this).find('span').addClass('active').parent().siblings().find('span').removeClass('active');
                $('.designerDesign').find('.designer_imgbar').eq(index).fadeIn().siblings().hide();
            },
            mouseleave:function(){
                index = $(this).index();
                i=index;
                interval=setInterval(designShow,4000);
            }
        });
    }
//设计师定制模块的提交事件
    function designerSubmit(){
        var i=$('#designerSubmit').next().find('i').html();
        $('#designerSubmit').click(function(){
            i < 1 ? 0 : i--;
            $(this).next().find('i').html(i);
            if(i==0){
                $(this).parent().next().find('span').removeClass('')
            }
        })
    }
    designerSubmit();
    //了解详情
    $('.learnMore').click(function(){
        $('.designerRequire').fadeIn().siblings().hide();
    })




});
