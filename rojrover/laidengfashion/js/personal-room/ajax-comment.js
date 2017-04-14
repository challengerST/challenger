var msg = $(".message");
var msg_box = $(".question");
var author, author_prev, author_prev_msg, parent_id;
$(".comment-area").on("click", ".question .answer", function () {
    msg.find(".cancel").remove();
    msg.find(".question").remove();
    $(this).parent(".question").append('<a class="cancel" href="javascript:void(0)">取消回复</a>');
    $(this).closest(".pinglun").append(msg_box);
});
msg.on("click", ".cancel", function () {
    console.log("aa");
    $(this).remove();
    msg.find(".question").remove();
    $(".certify").before(msg_box);
});
$("body").on("click", ".pinglun", function () {
        var date = getNowFormatDate();
        the_msg_box = $(this).parents(".question");
        author = "challengerSt";
        author_prev_msg = $("#msg").val();
        //直接进行回复
        if(the_msg_box.parent().hasClass("comment-area")){
            console.log("直接进行回复");
            var id =110+"";
            if (!id) {
                alert('您目前尚未登录，请登录！');
                window.location.href = "../../index.html"
            }else{
                $.ajax({
                    type: "get",
                    url: "../../pinglun",
                    data: {
                        content: author_prev_msg,
                        date: date,
                        pid: "0",
                        id: "110",
                        uid: "0",
                        pageId: pageId
                    },
                    success: function (data) {
                        console.log(data);
                        data = split_data(data);
                        var msg_text = "<div id='comment" + data[1] + "' class='comment'>" +
                            "<a href='#' class='avatar'>" +
                            "<img src='/Public/images/faceimg/58533f8d26da2.jpg'>" +
                            "</a>" +
                            "<div class='content'>" +
                            "<a href='#' class='author'>" + author + "</a>" +
                            "<div class='metadata'><span class='date'>" + date + "</span></div>" +
                            "<div class='text'>" + author_prev_msg + "</div>" +
                            "<div class='actions'><a class='reply' href='javascript:void(0)'>回复</a></div>" +
                            "</div></div>";
                        the_msg_box.parent().children(".message").append(msg_text);
                        $("#msg").val("");
                        $(".cancel").remove();
                        //$(".comment_number").text(data[0])
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        console.log(textStatus);
                        alert("评论失败，请重试")
                    }
                });
            }
        }
        //针对主楼进行回复
        else if (the_msg_box.parent().is("[id]")) {
            console.log("针对主楼进行回复");
            author_prev = the_msg_box.parent().children(".pinglun-area").find(".author").text();
            parent_id = (the_msg_box.parent().attr("id")).slice(7);
            $.ajax({
                type: "get",
                url: "../../pinglun",
                data: {
                    content: author_prev_msg,
                    date: date,
                    pid: parent_id,
                    uid: parent_id,
                    id: "110",
                    pageId: pageId
                },
                success: function (data) {
                    console.log(data);
                    data = split_data(data);
                    console.log(data);
                    var msg_text = "<div class='comments'>" +
                        "<div class='comment'>" +
                        "<a class='avatar'><img src='/Public/images/faceimg/58533f8d26da2.jpg'></a>" +
                        "<div class='content'>" +
                        "<a href='#' class='author'>" + author + "</a>" +
                        "<span class='huifu'>回复</span>" +
                        "<a href='#' class='author_prev'>" + author_prev + "</a>" +
                        "<div class='metadata'><span class='date'>" + date + "</span></div>" +
                        "<div class='text'>" + author_prev_msg + "</div>" +
                        "<div class='actions'><a class='reply' href='javascript:void(0)'><span style='display: none'>" + data[2] + "</span>回复</a></div>" +
                        "</div></div></div>";
                    the_msg_box.parent().append(msg_text);
                    $(".message").after(the_msg_box);
                    $("#msg").val("");
                    $(".cancel").remove();
                    //$(".comment_number").text(data[0])
                },
                error: function () {
                    alert("评论失败，请重试")
                }
            });
        }
        //针对回复进行回复
        else {
            console.log("针对回复进行回复");
            author_prev = the_msg_box.parent().find(".pinglun-area").find(".author").text();
            pid = (the_msg_box.parent().parent().parent().attr("id")).slice(7);
            parent_id = the_msg_box.parent().find(".reply").find("span").text();
            console.log(parent_id);
            $.ajax({
                type: "get",
                url: "../../pinglun",
                data: {
                    content: author_prev_msg,
                    date: date,
                    pid: pid,
                    uid: parent_id,
                    id: "110",
                    pageId: pageId
                },
                success: function (data) {
                    data = split_data(data);
                    console.log(data);
                    var msg_text = "<div class='comments'>" +
                        "<div class='comment'>" +
                        "<a class='avatar'><img src='/Public/images/faceimg/58533f8d26da2.jpg'></a>" +
                        "<div class='content'>" +
                        "<a href='#' class='author'>" + author + "</a>" +
                        "<span class='huifu'>回复</span>" +
                        "<a href='#' class='author_prev'>" + author_prev + "</a>" +
                        "<div class='metadata'><span class='date'> " + date + " </span></div>" +
                        "<div class='text'>" + author_prev_msg + "</div>" +
                        "<div class='actions'><a class='reply' href='javascript:void(0)'><span style='display: none'>" + data[2] + "</span>回复</a></div>" +
                        "</div></div></div>";
                    the_msg_box.parent().parent().parent().append(msg_text);
                    $(".message").after(the_msg_box);
                    $("#msg").val("");
                    $(".cancel").remove();
                    $(".comment_number").text(data[0])
                },
                error: function () {
                    alert("评论失败，请重试")
                }
            });

        }
    }
);
//获取当前时间
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}

//服务器返回数据转为字符串
function split_data(data) {
    return data.split(",")
}