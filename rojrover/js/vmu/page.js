var pc=$('#p-clu');
var edit=$('#edit');
//add position
//edit.on('click',function(){
//    add();
//});
function add(){
    var inn='';
    inn='<div class="big-box-con">'+
        '<div class="big-child">'+
        '<P class="lon"><input class="name" placeholder="username"> <input class="phoneNum" placeholder="phonenum"></P>'+
        '<P><input class="sheng" placeholder="province"> <input placeholder="city" class="shi"> <input class="qu" placeholder="area"> <input class="location" placeholder="location"></P>'+
        '<p class="edit-position"><a href=""><span>修改地址</span></a></p>'+
        '</div>'+
        '</div>';
    console.log(inn);
    console.log('inn');
    $('#p-clu').append(inn);
}
add();