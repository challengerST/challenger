<?php
require 'curl.php';
define("TOKEN", "wxtest");
$wechatObj = new wechatCallbackapiTest();
if (isset($_GET['echostr'])) {
    $wechatObj->valid();
}else{
    $wechatObj->responseMsg();
}

class wechatCallbackapiTest
{
    public function valid()
    {
        $echoStr = $_GET["echostr"];
        if($this->checkSignature()){
            header('content-type:text');
            echo $echoStr;
            exit;
        }
    }

    private function checkSignature()
    {
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];

        $token = TOKEN;
        $tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode( $tmpArr );
        $tmpStr = sha1( $tmpStr );

        if( $tmpStr == $signature ){
            return true;
        }else{
            return false;
        }
    }

    //处理
    public function responseMsg()
    {   
        $postStr=$GLOBALS['HTTP_RAW_POST_DATA'];

        if(!empty($postStr)){

            $this->writeLog($postStr);

            $postObj=simplexml_load_string($postStr,'SimpleXMLElement',LIBXML_NOCDATA);
            $type=trim($postObj->MsgType);
            switch($type){
                case 'text':
                $res=$this->responseTxt($postObj);
                break;

                case 'image':
                $res='这是图片消息';
                break;

                case 'voice':
                $res=$this->voince($postObj);
                break;

                case 'video':
                $res='这是视频消息';
                break;

                case 'music':
                $res='这是图片消息';
                break;

                case 'news':
                $res='这是图文消息';
                break;
				
				case 'event':
				$res=$this->guanzhu($postObj);
                break;

                default:
                $res='未知消息';
                break;
            }

            echo $res;
        }else{
            echo '1';
        }
    }


    //文本消息处理
    public function responseTxt($obj){
        $keyword=trim($obj->Content);
        if(strstr($keyword,'文本')){
            $Msg='这是一个文本消息';
            $TXT= $this->spendMsg($Msg,$obj);
        }elseif(strstr($keyword,'音乐')){
            $TXT=$this->Music($obj);
        }elseif(strstr($keyword,'个人信息')){
            $TXT=$this->getUserInfo($obj);
        }elseif(strstr($keyword,'语音识别')){
             $Msg='请直接说话';
            $TXT= $this->spendMsg($Msg,$obj);
        }else{
            $Msg="关键字不正确! \n
            仅一下关键字有效:文本\r音乐\r个人信息\r语音识别
            ";
            $TXT= $this->spendMsg($Msg,$obj);
        }

        return $TXT;
    }

    //获取用户信息
    public function getUserInfo($obj){
        $token=access_token();
        $url="https://api.weixin.qq.com/cgi-bin/user/info?access_token={$token}&openid={$obj->FromUserName}&lang=zh_CN";
        $success=httpRequest($url);
        $info=json_decode($success,true);

        $str="
        是否关注:{$info['subscribe']} \n 
        用户昵称:{$info['nickname']} \n 
        Openid:{$info['openid']} \n
        用户性别:{$info['sex']} \n 
        用户城市:{$info['city']} \n 
        用户省份:{$info['country']} \n 
        用户语言:{$info['language']} \n 
        用户关注时间:".date('Y-m-d H:i:s',$info['subscribe_time'])." \n 
        用户头像:{$info['headimgurl']} 

";
        return $this->spendMsg($str,$obj);
    }

    //音乐
    public function Music($obj){
        $music=array(
            'Title'=>'下雪的季节-本兮',
            'Description'=>'下雪的季节-本兮',
            'MusicUrl'=>'http://t88gau.natappfree.cc/music/xiaxue.mp3',
            'HQMusicUrl'=>'http://t88gau.natappfree.cc/music/xiaxue.mp3'
            );

        $mXML="<xml>
<ToUserName><![CDATA[%s]]></ToUserName>
<FromUserName><![CDATA[%s]]></FromUserName>
<CreateTime>%s</CreateTime>
<MsgType><![CDATA[music]]></MsgType>
<Music>
<Title><![CDATA[%s]]></Title>
<Description><![CDATA[%s]]></Description>
<MusicUrl><![CDATA[%s]]></MusicUrl>
<HQMusicUrl><![CDATA[%s]]></HQMusicUrl>
</Music>
</xml>";

    $mm=sprintf($mXML,$obj->FromUserName,$obj->ToUserName,time(),$music['Title'],$music['Description'],$music['MusicUrl'],$music['HQMusicUrl']);
    return $mm;
    }

    //发送视频消息
//     public function VideoMsg($obj){
//         $video=array('Title'=>'小视频','Description'=>'描述描述');
//         $vXml="<xml>
// <ToUserName><![CDATA[%s]]></ToUserName>
// <FromUserName><![CDATA[%s]]></FromUserName>
// <CreateTime>%s</CreateTime>
// <MsgType><![CDATA[video]]></MsgType>
// <Video>
// <Title><![CDATA[%s]]></Title>
// <Description><![CDATA[%s]]></Description>
// </Video> 
// </xml>";

//     $xiaoshiping = sprintf($vXml,$obj->FromUserName,$obj->ToUserName,time(),$video['Title'],$video['Description']);
//     return $xiaoshiping;
//     }

    //发送图文消息
//     public function imageTxt($obj){
//         $Content=array(
//             'Title'=>'这是图文消息',
//             'Description'=>'描述描述描述',
//             'PicUrl'=>'111',
//             'Url'=>'http://mp.weixin.qq.com/s?__biz=MzAxODI5ODMwOA==&mid=2666540407&idx=2&sn=d1fb6b0f7f58ea0c2b0fe4e3195b7ab5&chksm=80dce9dcb7ab60ca68ba89404bc5ced27a755c4e6e33141a08c716fc8534c507f40cf72985c4&scene=0#rd',
//             );

//         $image="<Title><![CDATA[%s]]></Title> 
// <Description><![CDATA[%s]]></Description>
// <PicUrl><![CDATA[%s]]></PicUrl>
// <Url><![CDATA[%s]]></Url>
// </item>
// <item>";

//     $str=sprintf($image,$Content['Title'],$Content['Description'],$Content['PicUrl'],$Content['Url']);

//     $imageTpl="<xml>
// <ToUserName><![CDATA[%s]]></ToUserName>
// <FromUserName><![CDATA[%s]]></FromUserName>
// <CreateTime>%s</CreateTime>
// <MsgType><![CDATA[news]]></MsgType>
// <ArticleCount>%s</ArticleCount>
// <Articles>
// $str
// </Articles>
// </xml> ";

//     $tuwen=sprintf($imageTpl,$obj->ToUserName,$obj->FromUserName,time(),1);
//     return $tuwen;

//     }

    //语音消息
    public function voince($obj){
        if(!empty($obj->Recognition)){
            $content='你说的是:'.$obj->Recognition;
        }else{
            $content='没有听清!';
        }

        return $this->spendMsg($content,$obj);
    }

    //关注
    public function guanzhu($obj){
        // switch($obj->Event){
        //     case 'subscribe':
        //     // $con='感谢你的关注!';
        //     return $this->getUserInfo($obj);
        //     break;

        //     case 'unsubscribe':
        //     $con='为啥要取消!!!';
        // }

       return $this->getUserInfo($obj);
    }

    //发送文本消息
    public function spendMsg($content,$obj){
        $xml="<xml>
<ToUserName><![CDATA[%s]]></ToUserName>
<FromUserName><![CDATA[%s]]></FromUserName>
<CreateTime>%s</CreateTime>
<MsgType><![CDATA[text]]></MsgType>
<Content><![CDATA[%s]]></Content>
</xml>";

    $result =sprintf($xml,$obj->FromUserName,$obj->ToUserName,time(),$content);
    return $result;
    }

    //日志
    public function writeLog($content){
        $filename='log.txt';
        if(file_exists($filename) && abs(filesize($filename)) > 10240){
            unlink($filename);
        }

        file_put_contents($filename,date('Y-m-d H:i:s')."\n".$content."\n",FILE_APPEND);
    }
}
?>