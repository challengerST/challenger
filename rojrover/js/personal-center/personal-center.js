$(function () {
    //function chebox() {
        //var txt1 = '<div class="showcb">' +
                //'<label class="am-checkbox am-secondary">' +
                //'<input type="checkbox" value="" data-am-ucheck>' +
                //'</label>' +
            //'<label class="am-checkbox-inline">' +
            //'<input type="checkbox" value="" data-am-ucheck>' +
            //'</label>' +
            //'</div>';
        //return txt1;
    //};
    function del() {
        var txt2 = '<div class="hoshdl">' +
            '<img src="img/personal-center/deletew.png" alt="">' +
            '</div>';
        return txt2;
    }

    //var txt1 = chebox();
    var txt2 = del();
    $('.brhoperate').click(function () {
        $('.brhopedls').show();
        $('.brhoperate').hide();
        $('.brh-b').each(function () {
            //chebox();
            $(this).append(txt2);
            $(this).children(':first').children(':first').show();
        });
        //$('.brh-b .am-ucheck-icons').each(function () {
        //    $(this).click(function(){
        //        alert(1);
        //    });
        //});
        $('.brh .am-ucheck-icons').click(function(){
            alert(1);
        });
        $('.hoshdl').click(function () {
            $(this).parent().remove();
        });
    });
    $('.brhcancle').click(function () {
        $('.showcb').hide();
        $('.brhopedls').hide();
        $('.brhoperate').show();
        $('.brh-b').each(function () {
            //chebox();
            $(this).append(txt2);
            $(this).children(':first').children(':first').hide();
        });
    });
    $('#conclear').click(function () {
        $('#stylecons').show();
    });
    $('.c-chose').click(function () {
        $(this).parent().remove();
    });
    $('#con-close').click(function () {
        $('#stylecons').hide();
    });
    // have chose num
    var chosednum = $('.brh-b').length;
    $('#totalnum').text(chosednum);
    for (var i = 0; i < chosednum; i++) {
        console.log(chosednum);
    }
    function ReverseAll() {
        $('table :checkbox').each(function () {
            var isChecked = $(this).prop('checked');     // $(this) 获取当前的循环对象，此例中表示 table 中的 checkbox 子元素 集合中的一个元素
            if (isChecked) {
                $(this).prop("checked", false);
            }
            else {
                $(this).prop("checked", true);
            }
        });
    }
    ReverseAll();
});
$(function () {
    (function ($) {
        $(function () {
            var options =
            {
                thumbBox: '.cropimgbox-thumbBox',
                spinner: '.cropimgbox-spinner',
                imgSrc: ''
            }
            var cropper = $('.cropimgbox-imageBox').cropimgbox(options);
            var img = "";

            $(document).on('change', '#upload-file', function () {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        options.imgSrc = e.target.result;
                        cropper = $('.cropimgbox-imageBox').cropimgbox(options);
                        getImg();
                    }
                    reader.readAsDataURL(this.files[0]);
                    this.files.length = 0;
                })
                .on('mouseup', '.cropimgbox-imageBox', function () {
                    getImg();
                })
                .on('click', '#btnZoomIn', function () {
                    cropper.zoomIn();
                    cropper.getBlob
                })
                .on('click', '#btnZoomOut', function () {
                    cropper.zoomOut();
                });

            function getImg() {
                cropper.getDataURL(function (imgs) {
                    $('.cropimgbox-cropped').html('');
                    $('.cropimgbox-cropped').append('<img src="' + imgs[0] + '" align="absmiddle" style="width:160px;margin-top:4px;margin-bottom:4px;border:1px solid #e6e6e6"><p>160*160</p>');
                    $('.cropimgbox-cropped').append('<img src="' + imgs[0] + '" align="absmiddle" style="width:100px;margin-top:4px;margin-bottom:4px;border:1px solid #e6e6e6"><p>100*100</p>');
                });
            }
        })
    })(jQuery);
});
$(function () {
    $('#doc-vld-msg').validator({
        onValid: function (validity) {
            $(validity.field).closest('.am-form-group').find('.am-alert').hide();
        },

        onInValid: function (validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-group');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            if (!$alert.length) {
                $alert = $('<div class="am-alert am-alert-danger"></div>').hide().appendTo($group);
            }

            $alert.html(msg).show();
        }
    });
});

