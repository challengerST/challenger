var szx = document.querySelector('.zximg');
var Fashion = szx.querySelectorAll('.fashion');
var sst = document.querySelectorAll('.sst')[0];
var act = szx.querySelectorAll('.active');
var src = "";
//    加样式
for (var i = 0; i < act.length; i++) {
    act[i].parentNode.index = i;
    act[i].parentNode.onclick = function () {
        for (var j = 0; j < act.length; j++) {
            act[j].style.display = "none";
        }
        act[this.index].style.display = "block";
    };
}
for (var i = 0; i < act.length; i++) {
    act[i].previousSibling.onclick = function () {
        console.log(1);
        src = this.getAttribute("src");
        var src1 = '';
        src1 = src.substring(0, 18) + '1.jpg';
        console.log(src1);
        sst.style.backgroundImage = "url(./" + src1 + ")";
    };
}


