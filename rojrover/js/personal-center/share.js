var filebtn = document.querySelector('[type=file]');
//console.log(btn);
document.getElementsByClassName('share-items')[0].addEventListener('click',function(e){

    if(e.target && e.target.nodeName=='span') {
        console.log(e)
    }

    if(e.target && e.target.nodeName=='I'){
        filebtn.click();

    }
});
//share.addEventListener('click', function(){
//    filebtn.click();
//});
filebtn.addEventListener('change', function(e){
    var file = this.files[0];
    if(!file){return};

    var reader = new FileReader();
    //读取图片信息，以base64编码的方式显示图片信息
    // reader.readAsDataURL(file);
    //读取文本信息
    reader.readAsText(file);

    reader.onload = function(e){

        console.log(e);

        var result = e.target.result;

        var p = document.createElement('p');

        p.innerHTML = result;

        document.body.appendChild(p);

        // var img = document.createElement('img');
        //     img.src = result;
        //  document.body.appendChild(img);
    }

})
