var itemsUp=document.getElementById('items-updates');
var Lis=itemsUp.getElementsByClassName('st');
var cds=document.getElementsByClassName('cd');
for(var i=0;i<Lis.length;i++){
    Lis[i].index=i;
    Lis[i].onclick=function(){
        for(var j=0;j<Lis.length;j++){
            //Lis[j].className-='nav';
            Lis[j].classList.remove('nav');
            var num=this.getAttribute('name');
            num=null ? alert('just try next') : num;
            var getNum=function(){
                return num;
            };
        }
        var tt=getNum();
        console.log(tt);
        for(var i=0;i<cds.length;i++){
            cds[i].style.display='none';
        }
        cds[tt].style.display='block';
        this.classList.add('nav');
        //num=null ? alert('just try next') : num
        //cds[num].style.display='block';
    };
    //this.className+='nav';
}

var Pc=document.getElementsByClassName('p-center')[0];
var PcSpan=Pc.getElementsByTagName('span');
var css=document.getElementsByClassName('cs');
console.log(PcSpan.length);
for(var i=0;i<PcSpan.length;i++){
    PcSpan[i].index=i;
    PcSpan[i].onclick=function(){
        for(var j=0;j<PcSpan.length;j++){
            //Lis[j].className-='nav';
            PcSpan[j].classList.remove('dd');
            var num=this.getAttribute('cc');
            num=null ? alert('just try next') : num;
            var acNum=function(){
                return num;
            };
        }
        var ss=acNum();
        console.log(ss);
        for(var i=0;i<css.length;i++){
            css[i].style.display='none';
        }
        $('.cs').eq(ss).show();
        //css[ss].style.display='block';
        this.classList.add('dd');
    };
}

