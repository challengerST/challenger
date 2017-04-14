var Pc=document.getElementsByClassName('p-center')[0];
var PcSpan=Pc.getElementsByTagName('span');
var css=document.getElementsByClassName('cs');
console.log(PcSpan.length);
for(var i=0;i<PcSpan.length;i++){
	PcSpan[i].index=i;
	PcSpan[i].onclick=function(){
		alert(this.index);
		for(var j=0;j<PcSpan.length;j++){
			//Lis[j].className-='nav';
			PcSpan[j].classList.remove('tt');
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
		css[ss].style.display='block';
		this.classList.add('tt');
	};
}