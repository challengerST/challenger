//;
$('#searchoption').find('input').hover(function () {
        $(this).css({'borderColor': '#ff3250'});
    $(this).next().css('backgroundImage','url(img/common/serachr.png)');
    }, function () {
        $(this).css({'borderColor': '#e6e6e6'});
    $(this).next().css('backgroundImage','url(img/common/serach.png)');
    }
);
$('#searchoption').find('input').on({
        focus: function () {
            $(this).parent().siblings().hide();
            $(this).next().animate({'marginLeft': '-28px'}, 400);
            $(this).animate({'width': '160px'}, 400)
        },
        blur: function () {
            $(this).next().animate({'marginLeft': '-34px'}, 400);
            $(this).animate({'width': '55px'}, 400,function(){
                $(this).parent().siblings().show();
            });
        }
    }
);


