//选择
//function chose(){
//    var a=0;
//    $('tbody').find('tr').click(function(){
//        console.log(a);
//        if(a==0){
//            $(this).find('.check-one').prop('checked',true);
//            GetCount();
//            a=1;
//            console.log(a);
//        }else{
//            $(this).find('.check-one').prop('checked',false);
//            GetCount();
//            a=0;
//            console.log(a);
//        }
//
//    });
//}
//chose();
// 全选
$(".check-all").click(function () {
    if(this.checked){
        $(".check-one").prop("checked",true);
        $('input[name=checkall]').prop("checked",true);
    } else{
        $(".check-one").prop("checked",false);
        $('input[name=checkall]').prop("checked",false);
    }
    GetCount();
});

//反选
//$("#invert").click(function () {
//    $(".gwc_tb2 input[name=newslist]").each(function () {
//        if ($(this).prop("checked")) {
//            $(this).prop("checked", false);
//            $(this).next().css({ "background-color": "#ffffff", "color": "#000000" });
//        } else {
//            $(this).prop("checked", true);
//            $(this).next().css({ "background-color": "#3366cc", "color": "#000000" });
//        }
//    });
//    GetCount();
//});

//取消
//$("#cancel").click(function () {
//    $(".gwc_tb2 input[name=newslist]").each(function () {
//        $(this).prop("checked", false);
//        $(this).next().css({ "background-color": "#ffffff", "color": "#000000" });
//    });
//    GetCount();
//});

// 所有复选(:checkbox)框点击事件
$(".check-one").click(function () {

});

// 输出
$(".check-one").click(function () {
    GetCount();
});
//加减
$('.add').click(function(){
    $(this).parent().find('.reduce').show().next().css('marginLeft','0px');
    var a=$(this).prev().val();
    a++;
    $(this).prev().val(a);
    total(this);
    GetCount();
});
$('.count-input').css('marginLeft','20px');
$('.reduce').click(function(){
    var a=$(this).next().val();
    a--;
    console.log(a);
    if(a<1){
        $(this).parent().find('.reduce').hide();
        $(this).parent().find('.count-input').css('marginLeft','20px');
        a=1;
    }else{
        $(this).parent().find('.reduce').show();
        $(this).parent().find('.count-input').css('marginLeft','0px');
    }
    $(this).next().val(a);
    total(this);
    GetCount();
});

//总数
function total(obj){
    var tnum=($(obj).parent().parent().parent().find('.count-input').val())*($(obj).parent().parent().parent().find('.price').html());
    $(obj).parent().parent().parent().find('.subtotal').html(tnum);
}
//获取已选数量
function cNum(){
    $('tbody').find('tr').find('.check-one').each(function(){
        console.log(3);
        if($(this).is(':checked')){
            console.log(2);
            //$(this).parent().find('.delete').click(function(){
            //    alert(1);
                //GetCount();
                //console.log($('tbody').find('tr').length);
            //});
        }
    });
}
cNum();
//获取数量
function GetCount() {
    var conts = 0;
    var aa = 0;
    var tn=$('tbody').find('tr').length;
    $(".check-one").each(function () {
        if ($(this).prop("checked")) {
            for (var i = 0; i < $(this).length; i++) {
                conts += parseInt($(this).parent().parent().find('.subtotal').html());
                aa += 1;
            }
            if(aa==tn){
                $('input[name=checkall]').prop("checked",true);
            }else{
                $('input[name=checkall]').prop("checked",false);
            }
        }
    });
    $("#newcount").text(aa);
    $("#priceTotal").html((conts).toFixed(2)); //toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
    //total(obj);
}
//删除
function Delete(){
    var aa=$('tbody').find('tr').length;
    $('.delete').click(function(){
        //aa=$('tbody').find('tr').length;
        $(this).parent().parent().hide();
        aa--;
        if(aa<0){
            aa=0;
        }else if(aa==0){
            $('.headert').hide();
            $('.product').hide();
            $('#cartTable').find('thead').hide();
            $('#foot').hide();
            $('.shopnone').fadeIn();
        }
        $('#totalcount').text(aa);
        //total(this);
    });
}
Delete();
//批量删除
function deleteAll(){
    $('#deleteAll').click(function(){
        $('.check-one').each(function(){
            if($(this).is(':checked')){
                $(this).parent().parent().hide();
                GetCount();
            }
        });
        if($('.check-all').is(':checked')){
            $('.headert').hide();
            $('.product').hide();
            $('.foot').hide();
            $('.shopnone').fadeIn();
        }
    });
}
deleteAll();






