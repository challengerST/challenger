$(function () {
    //兼容ie
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
            var ret = [];
            var els = document.getElementsByTagName('*');
            for (var i = 0, len = els.length; i < len; i++) {
                if (els[i].className === cls || els[i].className.indexof(cls + '') >= 0
                    || els[i].className.indexof('' + cls + '') >= 0
                    || els[i].className.indexof('' + cls) >= 0) {
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }
    var cartTable = document.getElementById('cartTable');
    //var tr = cartTable.children[1].rows;
    var tr='';
    var checkInputs = document.getElementsByClassName('check');
    var checkAllinputs = document.getElementsByClassName('check-all');
    var newCount = document.getElementById('newcount');
    // 已选商品数量
    var totalCount = document.getElementById('totalcount');
    // 商品总数
    var priceTotal = document.getElementById('priceTotal');
    var deleteAll = document.getElementById('deleteAll');
    var selected = document.getElementById('selected');
    var selectedView = document.getElementById('selectedView');
    var selectedList = document.getElementById('selectedviewList');
    var shopNone = document.getElementsByClassName('shopnone')[0];
    console.log(shopNone);
    var shop = document.getElementsByClassName('shopping')[0];
    console.log(shop);
    console.log(tr.length);
    //页面没有元素的时候显示
    function blank(){
        tr = cartTable.children[1].rows;
        console.log(tr.length);
        if (tr.length > 0) {
            //shop.setAttribute('display','block');
            //shopNone.setAttribute('display','none');
            shop.style.display='block';
            shopNone.style.display='none';
        } else {
            shop.style.display='none';
            shopNone.style.display='block';
            totalCount.innerHTML="0";
        }
    }
    blank();
//小计
    function getsubTotal(tr) {
        var tds = tr.cells;
        var price = parseFloat(tds[2].innerHTML);
        var count = parseInt(tr.getElementsByTagName('input')[1].value);
        var subtotal = parseFloat(price * count);
        tds[4].innerHTML = subtotal.toFixed(2);
        //这在键盘事件的时候会出现多位小数的效果所以需要加上fixed(2);
    }
// 计算
    function getTotal() {
        var selected = 0;
        var price = 0;
        var HTMLiner = '';
        for (var i = 0, len = tr.length; i < len; i++) {
            if (tr[i].getElementsByTagName("input")[0].checked) {
                tr[i].className = 'on';
                selected += parseInt(tr[i].getElementsByTagName("input")[1].value);
                price += parseFloat(tr[i].cells[4].innerHTML);
                HTMLiner += '<div><img src="' + tr[i].getElementsByTagName('img')[0].src + '" alt=""><span class="del" index="' + i + '  ">取消选择</span></div>'
            } else {
                tr[i].className = '';
                //这里只是给选择的加上样式
            }
        }
        newCount.innerHTML = selected;
        priceTotal.innerHTML = price.toFixed(2);
        totalCount.innerHTML = len + selected;
        selectedList.innerHTML = HTMLiner;
        if (selected == 0) {
            selectedView.className = 'selected-view';
        }
        blank();
    }
    for (var i = 0, len = checkInputs.length; i < len; i++) {
        checkInputs[i].onclick = function () {
            if (this.className === 'check-all check') {
                for (var j = 0; j < checkInputs.length; j++) {
                    checkInputs[j].checked = this.checked;
                }
            }
            //全选事件
            if (this.checked == false) {
                for (var k = 0; k < checkAllinputs.length; k++) {
                    checkAllinputs[k].checked = false;
                }
            }
            //防止一个没有选择，从而全选框就取消选择；
            getTotal();
        }
    }
    selected.onclick = function () {
        //     在0的时候隐藏

        function show() {
            if (selectedView.className == 'selected-view') {
                if (newCount.innerHTML != 0) {
                    selectedView.className = 'selected-view show';
                }
            } else {
                selectedView.className = 'selected-view';
            }
        }

        show();
    };
    selectedList.onclick = function (e) {
        e = e || window.event;
        var el = e.srcElement;
        if (el.className == "del") {
            var index = el.getAttribute('index');
            console.log(index);
            console.log(typeof index);
            //这里测试一下index的类型
            var input = tr[parseInt(index)].getElementsByTagName('input')[0];
            input.checked = false;
            input.onclick();
        }
    };
    for (var i = 0; i < tr.length; i++) {
        //代理事件
        tr[i].onclick = function (e) {
            e = e || window.event;
            var el = e.srcElement;
            var cls = el.className;
            var input = this.getElementsByTagName('input')[1];
            var val = parseInt(input.value);
            var reduce = this.getElementsByTagName('span')[1];
            switch (cls) {
                case 'add':
                    input.value = val + 1;
                    reduce.innerHTML = '-';
                    getsubTotal(this);
                    break;
                case 'reduce':
                    if (val > 1) {
                        input.value = val - 1;
                    }
                    if (val <= 1) {
                        reduce.innerHTML = "";
                    }
                    getsubTotal(this);
                    break;
                case 'delete':
                    var con = confirm('确定要删除吗?');
                    if (con) {
                        this.parentNode.removeChild(this);
                        //移除此节点
                    }

                    blank();
                    break;
                default:
                    break;
            }
            getTotal();
        };
        //键盘事件
        tr[i].getElementsByTagName('input')[1].onkeyup = function () {
            var val = parseInt(this.value);
            //转换成数字
            var tr = this.parentNode.parentNode;
            var reduce = tr.getElementsByTagName('span')[0];
            if (isNaN(val) || val < 1) {
                val = 1;
            }
            this.value = val;
            if (val <= 1) {
                reduce.innerHTML = '';
            } else {
                reduce.innerHTML = '-';
            }
            getSubTotal(tr);
            //小计
            getTotal();
            //汇总
        }
    }
    deleteAll.onclick = function () {
        if (newCount.innerHTML != 0) {
            var con = confirm('确定要删除吗');
            if (con) {
                for (var i = 0; i < tr.length; i++) {
                    var input = tr[i].getElementsByTagName('input')[0];
                    if (input.checked) {
                        tr[i].parentNode.removeChild(tr[i]);
                        i--;
                    }
                }
            }
            blank();
        }

    };
    checkAllinputs[0].checked = true;
    checkAllinputs[0].onclick();
});
