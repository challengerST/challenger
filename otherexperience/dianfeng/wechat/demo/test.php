<?php


require './WeChat.class.php';
define('APPID', 'wxdd3e918d38b3a8f5');
define('APPSECRET', '0b31aae13b1a3750ae86e12c138eff62');
$wechat = new WeChat(APPID, APPSECRET);

// $access_token = $wechat->getAccessToken();
// var_dump($access_token);

$wechat->getQRCode(1234, './1234.jpg', WeChat::QRCODE_TYPE_TEMP);

//  $wechat->getQRCodeTicket(1234, 1);
// $wechat->getQRCodeTicket('http://php.itcast.cn/', 3);

