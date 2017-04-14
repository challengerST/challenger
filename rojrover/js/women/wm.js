var deslevel = document.querySelector('#deslevel');
var oli = deslevel.querySelectorAll('li');
var redback = document.querySelector('.redback');
var rbli = redback.querySelectorAll('li');
var female = document.querySelector('.female');
var fmli = female.querySelectorAll('span');
console.log(oli);
console.log(rbli);
for (var i = 0; i < oli.length; i++) {
    oli[i].index = i;
    oli[i].onmouseover = function () {
        for (var j = 0; j < oli.length; j++) {
            oli[j].className = '';
        }
        this.className = 'active';
    }
}

for (var i = 0; i < rbli.length; i++) {
    rbli[i].index = i;
    rbli[i].onmouseover = function () {
        for (var j = 0; j < rbli.length; j++) {
            rbli[j].className = '';
        }
        this.className = 'active';
    }
}
for (var i = 0; i < fmli.length; i++) {
    fmli[i].index = i;
    fmli[i].onmouseover = function () {
        for (var j = 0; j < fmli.length; j++) {
            fmli[j].className = '';
        }
        this.className = 'active';
    }
}

//women-cloth页面 中的分类添加效果
$('.all-theme .fl-l').click(function () {
    var index=$(this).index();
    $(this).addClass("nav").siblings().removeClass("nav");
});