<?php

require './WeChat.class.php';
define('APPID', 'wxdd3e918d38b3a8f5');
define('APPSECRET', '0b31aae13b1a3750ae86e12c138eff62');
define('TOKEN', 'wxtest');
$wechat = new WeChat(APPID, APPSECRET, TOKEN);

// $result = $wechat->menuDelete();
// var_dump($result);

$menu = <<<JSON
{
    "button": [
        {
             "name":"加入镖局",
           "sub_button":[
           {    
               "type":"view",
               "name":"成为镖师",
               "url":"http://wx.opoop.cn/GuoGuoBiaoJu1/html/gerenzhongxin1.html"
            },
            {
               "type":"view",
               "name":"成为镖头",
               "url":"http://wx.opoop.cn/GuoGuoBiaoJu1/html/gerenzhongxin2.html"
            }
           ]
           
        },
         {
           "type":"view",
            "name":"裹裹押镖",
            "url":"http://wx.opoop.cn/GuoGuoBiaoJu1/html/index.html"
        }
        
    ]
}
JSON;
$result = $wechat->menuSet($menu);
var_dump($result);