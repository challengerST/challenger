function stp() {
    //转发的弹出框
    var layOut = document.createElement('div'),
        loginK = document.createElement('div');
    layOut.setAttribute('id', 'lay-out');
    loginK.setAttribute('id', 'tp-box');
    document.body.appendChild(layOut);
    document.body.appendChild(loginK);
    var NlayOut = document.getElementById('tp-box');
    NlayOut.innerHTML = '<form>' +
        '<div class="ptop clearfix">' +
        '<div class="fl-l">添加地址</div>' +
        '<div class="close-cancle fl-r" id="close"><img src="img/common/cancle-img_03.png" alt=""/></div>' +
        '</div>' +
        '<div class="spar">' +
        '<div>' +
        '<div class="selet"><span>收货地址</span>' +
        '<div id="proname">' +
        '<span value="0">省份</span>' +
        '</div>' +
        '<ul class="pro"></ul>' +
        '<div id="cityname">' +
        '<span value="0">市辖区</span>' +
        '</div>' +
        '<ul class="city"></ul>' +
        '<div id="areaname">' +
        '<span value="">区/县</span>' +
        '</div>' +
        '<ul class="area"></ul>' +
        '</div>' +
        '<div  class="mt"><span>详细地址</span><input type="text" class="dp" placeholder="详细地址你来填，送货到家哦"></div>' +
        '<div  class="mt contact"><span>联系人</span><input type="text" class="ln" placeholder="你的名字"><span>联系电话</span><input type="text" class="lp" placeholder="你的电话"></div>' +
        '<div class="defaup">' +
        '<div class="checkboxFive">'+
        '<input type="checkbox" value="1" id="checkboxFiveInput" name="" />'+
        '<label for="checkboxFiveInput"></label>' +
        '<span class="mry">设为默认地址</span>'+
        '</div>' +
        '</div>' +
        '<div style="text-align:right;margin-top:66px;"><a href=""><span id="p-cle" class="btc">取消</span></a><a href=""><span id="p-cure" class="btc active">保存</span></a></div>' +
        '</div>' +
        '</form>';
    szs();
    oc();
}
function szs() {
    $('#close').click(function () {
        $('#lay-out').hide();
        $('#tp-box').hide();
    });
}
function oc() {
    function chosePro() {
        var html = "";
        var provLeng = provinceList.length;
        for (var i = 0; i < provLeng; i++) {
            html += "<li value=" + i + ">" + provinceList[i].name + "</li>";
        }
        $(".pro").html(html);

    }
    function choseCity() {
        var k = $('#proname>span').attr("value");
        var city = provinceList[k].cityList;
        var cityLeng = city.length;
        var html = "";
        for (var i = 0; i < cityLeng; i++) {
            html += "<li value=" + i + ">" + city[i].name + "</li>";
        }
        $(".city").html(html);
    }

    function choseArea() {
        var k = $('#proname>span').attr("value");
        var v = $('#cityname>span').attr("value");
        var area = provinceList[k].cityList[v].areaList;
        var areaLeng = area.length;
        var html = "";
        for (var i = 0; i < areaLeng; i++) {
            html += "<li>" + area[i] + "</li>";
        }
        $(".area").html(html);
    }

//	点击事件
    $('#proname').click(function () {
        if ($('.city').css("display") == "none" && $('.area').css("display") == "none") {
            chosePro();
            var h = -$('.pro').height() / 4;
            $('.pro').css("top", h);
            $('.pro').show();
            $('.pro>li').click(function () {
                $('#proname>span').attr("value", $(this).val());
                $('#proname>span').html($(this).html());
                $('.pro').hide();
            })
        }
    });
    $('#cityname').click(function () {
        if ($('.pro').css("display") == "none" && $('.area').css("display") == "none") {
            choseCity();
            var h = -$('.city').height() / 2 + 40;
            $('.city').css("top", h);
            $('.city').show();
            $('.city>li').click(function () {
                $('#cityname>span').attr("value", $(this).val());
                $('#cityname>span').html($(this).html());
                $('.city').hide();
            })
        }
    });
    $('#areaname').click(function () {
        if ($('.pro').css("display") == "none" && $('.city').css("display") == "none") {
            choseArea();
            $('.area').show();
            var h = -$('.area').height() / 2 + 40;
            $('.area').css("top", h);
            $('.area>li').click(function () {
                $('#areaname>span').attr("value", $(this).val());
                $('#areaname>span').html($(this).html());
                $('.area').hide();
            })
        }
    });
    //选择想用地址
    $('.radio').click(function () {
        $('.radio>div').toggle();
    })
}