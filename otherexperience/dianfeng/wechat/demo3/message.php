<?php
	//给用户发消息
	require 'curl.php';
	$token=access_token();
	$url="https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token={$token}";
	$m='{
    "touser":"oEf-vwOoU9oPYcfvI14ze_OHEaqM",
    "msgtype":"text",
    "text":
    {
         "content":"哈哈哈啊哈哈"
    }
}';
	$res=https_request($url,$m);

	var_dump($res);