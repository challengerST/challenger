var column = document.getElementById('column');
var fashionInf = document.getElementById('fashion-inf');
var trendForecase = document.getElementById('trend-forecase');
var columnFile = document.getElementById('column-file');
var Lis = columnFile.getElementsByTagName('li');
var sdL=$('.shaoda-li');
for (var i = 0; i < Lis.length; i++) {
    Lis[i].index = i;
    Lis[i].onmouseover = function () {
        for (var j = 0; j < Lis.length; j++) {
            Lis[j].classList.remove('white-red');
        }
        this.classList.add('white-red');
        sdL.html(this.firstChild.nodeValue);
        console.log(this.firstChild.nodeValue);
    }
}
function load(){

}