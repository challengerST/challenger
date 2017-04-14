var column = document.getElementById('column');
var columnFile = document.getElementById('column-file');
var Lis = columnFile.getElementsByTagName('li');
var file = document.getElementsByClassName('cfilename');
for (var i = 0; i < Lis.length; i++) {
    Lis[i].index = i;
    file[i].onmouseover = function () {
        for (var j = 0; j < Lis.length; j++) {
            file[j].classList.remove('white-red');
        }
        this.classList.add('white-red');
        sdL.html(this.firstChild.nodeValue);
        console.log(this.firstChild.nodeValue);
    }
}
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
//$('#searchoption').mouseleave(function () {
//    $(this).css('borderColor', '#e6e6e6');
//    $(this).children(":first").attr('src', 'img/common/serach.png')
//});
//$('#searchoption').click(function () {
//    $(this).css('borderColor', '#ff3250').children(":first").attr('src', 'img/common/serachr.png');
//    $('.first-page-list-left').css({'width': '830px'});
//    $(this).siblings().toggle();
//    $('.teleSr').addClass('active');
//});

