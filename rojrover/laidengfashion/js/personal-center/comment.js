window.onload= function () {
    var wnum=document.getElementsByClassName('w-num')[0];
    var text = document.getElementsByTagName('textarea')[0];
    var Wdnum = document.getElementById('wd-num');
    var num = 0;
    text.onfocus = function () {
        Wdnum.innerHTML = num - 140;
        change();
        text.oninput = text.onpropertychange = change;
    };
    //判断输入字符多少
    function change(){
        //var mark = document.getElementsByTagName('em')[0];
        var tValue = text.value;
        num = Math.ceil(getLength(tValue)/2);
        if (num < 140) {
            Wdnum.innerHTML = 140 - num;
            Wdnum.style.color = 'green';
        } else {
            wnum.innerHTML = '已超出<i class="wd-num" style="color:red">' + (num - 140) + '</i> 个字';
        }
    }
    //正则：用于区分中文为两个字节
    function getLength(str) {
        return String(str).replace(/[^\x00-\xff]/g, 'aa').length;
    }
   //
}
