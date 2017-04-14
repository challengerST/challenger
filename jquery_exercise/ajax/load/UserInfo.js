$('#button1').click(function(){
    var data=[
        {
            "name":"杨桃",
            "sex":"男",
            "邮箱":"谷歌邮箱"
        },
        {
            "name":"杨桃",
            "sex":"男",
            "邮箱":"谷歌邮箱"
        }
    ];
    var strHTML='';
    $.each(data,function(){
        strHTML+='name:'+this.name+'<br>';
        strHTML+='sex:'+this.sex+'<br>';
    });
    $('#divTip').html(strHTML);
});
