var deslevel=document.querySelector('.redback');
var oli=deslevel.querySelectorAll('li');
for(var i=0;i<oli.length;i++){
    oli[i].index=i;
    oli[i].onmouseover=function(){
        for(var j=0;j<oli.length;j++){
            oli[j].className='';
        }
        this.className='active';
    }
}