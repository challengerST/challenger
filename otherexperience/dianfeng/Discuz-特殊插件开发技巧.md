
##1.开启开发者模式并设置特殊主题

开启开发者模式，在config/config_global.php 后边填一行$_config['plugindeveloper'] = 1;值为1表示开启开发者模式，为2则表示同时开启潜入点提示。填写完成之后刷新后台管理界面，依次找到应用-->插件-->找到创建的插件并点击设计，即可编辑刚刚创建的插件脚本了。这里仍然需要设置一下特殊主题。
> * 程序模块名称为前面插件创建时填写的名称。我们可以看看special_qr.class.php的具体代码
```
<?php
/**
 *	[一元云购v1.1(cloud_shop.{modulename})] (C)2017-2099 Powered by 胡电峰.
 *	Version: v1.1
 *	Date: 2017-1-11 12:23
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}



class threadplugin_cloud_shop{

	public $name = CLOUD_NAME;			//主题类型名称
	public $iconfile = CLOUD_ICON;	//发布主题链接中的前缀图标
	public $buttontext = CLOUD_BUTTONTEXT;	//发帖时按钮文字
	var $auc;

	/**
	 * 发帖时页面新增的表单项目
	 * @param Integer $fid: 版块ID
	 * @return string 通过 return 返回即可输出到发帖页面中 
	 */
	public function newthread($fid) {
		// ECHO 'newthread';
		;
		}
	}

	/**
	 * 主题发布前的数据判断 
	 * @param Integer $fid: 版块ID
	 */
	public function newthread_submit($fid) {
		//TODO - Insert your code here
		return '发布';
		
	}

	/**
	 * 主题发布后的数据处理 
	 * @param Integer $fid: 版块ID
	 * @param Integer $tid: 当前帖子ID
	 */
	public function newthread_submit_end($fid, $tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * 编辑主题时页面新增的表单项目
	 * @param Integer $fid: 版块ID
	 * @param Integer $tid: 当前帖子ID
	 * @return string 通过 return 返回即可输出到编辑主题页面中 
	 */
	public function editpost($fid, $tid) {
		//TODO - Insert your code here
		
		return 'TODO:editpost';
	}

	/**
	 * 主题编辑前的数据判断 
	 * @param Integer $fid: 版块ID
	 * @param Integer $tid: 当前帖子ID
	 */
	public function editpost_submit($fid, $tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * 主题编辑后的数据处理 
	 * @param Integer $fid: 版块ID
	 * @param Integer $tid: 当前帖子ID
	 */
	public function editpost_submit_end($fid, $tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * 回帖后的数据处理 
	 * @param Integer $fid: 版块ID
	 * @param Integer $tid: 当前帖子ID
	 */
	public function newreply_submit_end($fid, $tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * 查看主题时页面新增的内容
	 * @param Integer $tid: 当前帖子ID
	 * @return string 通过 return 返回即可输出到主题首贴页面中
	 */
	public function viewthread($tid) {
		//TODO - Insert your code here
		
		return 'TODO:viewthread';
	}
}
```
## 2、设置板块权限

　　论坛-->板块管理，找到对应的板块-->编辑-->帖子选项、权限相关

##3、设置用户组和管理组权限

　　用户-->用户组（管理组）-->选择需要编辑的用户组-->批量编辑-->勾选可以发布特殊主题的用户组

　上诉步骤完成以后，为了快速地看看效果。直接从别的插件里面复制了一个模板newthread.htm到template目录下，然后修改了gfpaimai.class.php的newthread函数，让其加载自定义模板。
```
### 发帖主题	
    public function newthread($fid) {
        //TODO - Insert your code here

        include template("gfpaimai:newthread");
        //return 'TODO:newthread';
        return $return;
    }
```	
*修改验证函数
```
```
    public function newthread_submit($fid) {
        //TODO - Insert your code here
        
        $message=getgpc('message');
        //对内容判断
        if( empty($message) || strlen($message)<15  ) {
            showmessage("对不起，请填写交易内容和具体要求，不少于15字!");
        }
    }
```