
##1.����������ģʽ��������������

����������ģʽ����config/config_global.php �����һ��$_config['plugindeveloper'] = 1;ֵΪ1��ʾ����������ģʽ��Ϊ2���ʾͬʱ����Ǳ�����ʾ����д���֮��ˢ�º�̨������棬�����ҵ�Ӧ��-->���-->�ҵ������Ĳ���������ƣ����ɱ༭�ոմ����Ĳ���ű��ˡ�������Ȼ��Ҫ����һ���������⡣
> * ����ģ������Ϊǰ��������ʱ��д�����ơ����ǿ��Կ���special_qr.class.php�ľ������
```
<?php
/**
 *	[һԪ�ƹ�v1.1(cloud_shop.{modulename})] (C)2017-2099 Powered by �����.
 *	Version: v1.1
 *	Date: 2017-1-11 12:23
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}



class threadplugin_cloud_shop{

	public $name = CLOUD_NAME;			//������������
	public $iconfile = CLOUD_ICON;	//�������������е�ǰ׺ͼ��
	public $buttontext = CLOUD_BUTTONTEXT;	//����ʱ��ť����
	var $auc;

	/**
	 * ����ʱҳ�������ı���Ŀ
	 * @param Integer $fid: ���ID
	 * @return string ͨ�� return ���ؼ������������ҳ���� 
	 */
	public function newthread($fid) {
		// ECHO 'newthread';
		;
		}
	}

	/**
	 * ���ⷢ��ǰ�������ж� 
	 * @param Integer $fid: ���ID
	 */
	public function newthread_submit($fid) {
		//TODO - Insert your code here
		return '����';
		
	}

	/**
	 * ���ⷢ��������ݴ��� 
	 * @param Integer $fid: ���ID
	 * @param Integer $tid: ��ǰ����ID
	 */
	public function newthread_submit_end($fid, $tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * �༭����ʱҳ�������ı���Ŀ
	 * @param Integer $fid: ���ID
	 * @param Integer $tid: ��ǰ����ID
	 * @return string ͨ�� return ���ؼ���������༭����ҳ���� 
	 */
	public function editpost($fid, $tid) {
		//TODO - Insert your code here
		
		return 'TODO:editpost';
	}

	/**
	 * ����༭ǰ�������ж� 
	 * @param Integer $fid: ���ID
	 * @param Integer $tid: ��ǰ����ID
	 */
	public function editpost_submit($fid, $tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * ����༭������ݴ��� 
	 * @param Integer $fid: ���ID
	 * @param Integer $tid: ��ǰ����ID
	 */
	public function editpost_submit_end($fid, $tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * ����������ݴ��� 
	 * @param Integer $fid: ���ID
	 * @param Integer $tid: ��ǰ����ID
	 */
	public function newreply_submit_end($fid, $tid) {
		//TODO - Insert your code here
		
	}

	/**
	 * �鿴����ʱҳ������������
	 * @param Integer $tid: ��ǰ����ID
	 * @return string ͨ�� return ���ؼ����������������ҳ����
	 */
	public function viewthread($tid) {
		//TODO - Insert your code here
		
		return 'TODO:viewthread';
	}
}
```
## 2�����ð��Ȩ��

������̳-->�������ҵ���Ӧ�İ��-->�༭-->����ѡ�Ȩ�����

##3�������û���͹�����Ȩ��

�����û�-->�û��飨�����飩-->ѡ����Ҫ�༭���û���-->�����༭-->��ѡ���Է�������������û���

�����߲�������Ժ�Ϊ�˿��ٵؿ���Ч����ֱ�Ӵӱ�Ĳ�����渴����һ��ģ��newthread.htm��templateĿ¼�£�Ȼ���޸���gfpaimai.class.php��newthread��������������Զ���ģ�塣
```
### ��������	
    public function newthread($fid) {
        //TODO - Insert your code here

        include template("gfpaimai:newthread");
        //return 'TODO:newthread';
        return $return;
    }
```	
*�޸���֤����
```
```
    public function newthread_submit($fid) {
        //TODO - Insert your code here
        
        $message=getgpc('message');
        //�������ж�
        if( empty($message) || strlen($message)<15  ) {
            showmessage("�Բ�������д�������ݺ;���Ҫ�󣬲�����15��!");
        }
    }
```