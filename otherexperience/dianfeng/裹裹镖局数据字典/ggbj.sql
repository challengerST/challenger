/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : ggbj

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2017-02-27 00:47:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for gg_ad
-- ----------------------------
DROP TABLE IF EXISTS `gg_ad`;
CREATE TABLE `gg_ad` (
  `Aid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `AdTitle` varchar(255) DEFAULT NULL COMMENT '公告标题',
  `ShowStatus` int(1) DEFAULT '1' COMMENT '显示状态 0不显示 1显示',
  `AddTime` varchar(255) DEFAULT NULL COMMENT '添加时间',
  `BrowseAmount` int(11) DEFAULT '0' COMMENT '点击量',
  `Content` text COMMENT '内容',
  `Recommend` int(11) DEFAULT '0' COMMENT '推荐状态 0 不推荐 1 推荐',
  PRIMARY KEY (`Aid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_ad
-- ----------------------------

-- ----------------------------
-- Table structure for gg_address
-- ----------------------------
DROP TABLE IF EXISTS `gg_address`;
CREATE TABLE `gg_address` (
  `Aid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Uid` int(11) DEFAULT NULL COMMENT '用户ID',
  `Address` varchar(255) DEFAULT NULL COMMENT '发往地',
  `TargetAddress` varchar(255) DEFAULT NULL COMMENT '目标地址',
  `UserName` varchar(255) DEFAULT NULL COMMENT '收货人姓名',
  `Phone` char(11) DEFAULT NULL COMMENT '联系手机',
  PRIMARY KEY (`Aid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_address
-- ----------------------------

-- ----------------------------
-- Table structure for gg_admin
-- ----------------------------
DROP TABLE IF EXISTS `gg_admin`;
CREATE TABLE `gg_admin` (
  `Aid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `AdminName` varchar(255) DEFAULT NULL COMMENT '管理员账号',
  `PassWord` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL COMMENT '管理员邮箱',
  `AddTime` varchar(255) DEFAULT NULL COMMENT '添加时间',
  `Status` int(1) DEFAULT NULL COMMENT '状态 0 禁用 1 启用',
  PRIMARY KEY (`Aid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_admin
-- ----------------------------

-- ----------------------------
-- Table structure for gg_admin_data
-- ----------------------------
DROP TABLE IF EXISTS `gg_admin_data`;
CREATE TABLE `gg_admin_data` (
  `Did` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Aid` int(11) DEFAULT NULL COMMENT '管理员ID',
  `LoginIp` varchar(255) DEFAULT NULL COMMENT '最后登录IP',
  `LoginTime` varchar(255) DEFAULT NULL COMMENT '最后登录时间',
  PRIMARY KEY (`Did`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_admin_data
-- ----------------------------

-- ----------------------------
-- Table structure for gg_express
-- ----------------------------
DROP TABLE IF EXISTS `gg_express`;
CREATE TABLE `gg_express` (
  `Eid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ExpressName` varchar(255) DEFAULT NULL COMMENT '快递名称',
  `ExpressPhoto` varchar(255) DEFAULT NULL COMMENT '快递图片',
  `Sequence` int(11) DEFAULT '1' COMMENT '排序',
  `Status` int(1) DEFAULT NULL COMMENT '显示状态 0 不显示 1 显示',
  PRIMARY KEY (`Eid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_express
-- ----------------------------

-- ----------------------------
-- Table structure for gg_order
-- ----------------------------
DROP TABLE IF EXISTS `gg_order`;
CREATE TABLE `gg_order` (
  `OrderID` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `Uid` int(11) DEFAULT NULL,
  `OrderNumber` varchar(255) DEFAULT NULL COMMENT '订单号',
  `AddTime` varchar(255) DEFAULT NULL COMMENT '下单时间',
  `Express` int(11) DEFAULT NULL,
  `ExpirationTime` varchar(255) DEFAULT NULL,
  `Status` int(11) DEFAULT NULL COMMENT '订单状态',
  `Kg` varchar(255) DEFAULT '0' COMMENT '千克',
  `Money` decimal(10,0) DEFAULT '0' COMMENT '金额',
  PRIMARY KEY (`OrderID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_order
-- ----------------------------

-- ----------------------------
-- Table structure for gg_order_info
-- ----------------------------
DROP TABLE IF EXISTS `gg_order_info`;
CREATE TABLE `gg_order_info` (
  `InfoId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `OrderNumber` varchar(255) DEFAULT NULL COMMENT '订单号',
  `UserName` varchar(255) DEFAULT NULL,
  `Remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `Address` int(11) DEFAULT NULL COMMENT '地址',
  `Money` decimal(10,0) DEFAULT '0' COMMENT '金额',
  `Kg` varchar(255) DEFAULT '0' COMMENT '千克',
  `Payment` int(1) DEFAULT NULL COMMENT '支付方式',
  `PayTime` varchar(255) DEFAULT NULL COMMENT '付款时间',
  `AddTime` varchar(255) DEFAULT NULL COMMENT '下单时间',
  `GoodsTime` varchar(255) DEFAULT NULL COMMENT '收货时间',
  PRIMARY KEY (`InfoId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_order_info
-- ----------------------------

-- ----------------------------
-- Table structure for gg_order_status
-- ----------------------------
DROP TABLE IF EXISTS `gg_order_status`;
CREATE TABLE `gg_order_status` (
  `Sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `StatusName` varchar(255) DEFAULT NULL COMMENT '状态名称',
  PRIMARY KEY (`Sid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_order_status
-- ----------------------------

-- ----------------------------
-- Table structure for gg_user
-- ----------------------------
DROP TABLE IF EXISTS `gg_user`;
CREATE TABLE `gg_user` (
  `UserId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UserName` varchar(255) DEFAULT NULL COMMENT '用户名',
  `UserPhone` varchar(255) DEFAULT NULL COMMENT '用户手机',
  `UserPhoto` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `UserStatus` varchar(255) DEFAULT '1' COMMENT '用户状态',
  `Email` varchar(255) DEFAULT NULL COMMENT '用户邮箱',
  `Password` varchar(255) DEFAULT NULL,
  `Sex` int(11) DEFAULT '1' COMMENT '用户性别',
  `UserClass` int(11) DEFAULT NULL COMMENT '用户类别',
  `Openid` varchar(255) DEFAULT NULL COMMENT '微信openid',
  `HeadImgUrl` int(11) DEFAULT NULL COMMENT '微信头像',
  PRIMARY KEY (`UserId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_user
-- ----------------------------

-- ----------------------------
-- Table structure for gg_user_class
-- ----------------------------
DROP TABLE IF EXISTS `gg_user_class`;
CREATE TABLE `gg_user_class` (
  `Cid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ClassName` varchar(255) DEFAULT NULL COMMENT '级别名',
  PRIMARY KEY (`Cid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_user_class
-- ----------------------------

-- ----------------------------
-- Table structure for gg_user_data
-- ----------------------------
DROP TABLE IF EXISTS `gg_user_data`;
CREATE TABLE `gg_user_data` (
  `Did` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Uid` int(11) DEFAULT NULL COMMENT '关联ID',
  `LoginIp` varchar(255) DEFAULT NULL COMMENT '用户最后登录Ip',
  `LoginTime` varchar(255) DEFAULT NULL COMMENT '用户最后登录时间',
  PRIMARY KEY (`Did`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_user_data
-- ----------------------------

-- ----------------------------
-- Table structure for gg_user_realname
-- ----------------------------
DROP TABLE IF EXISTS `gg_user_realname`;
CREATE TABLE `gg_user_realname` (
  `Rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Uid` int(11) DEFAULT NULL COMMENT '关联用户ID',
  `IdNumber` char(18) DEFAULT NULL COMMENT '学生证',
  `Status` int(1) DEFAULT '1' COMMENT '认证状态 0 未通过 1已通过',
  `AddTime` char(20) DEFAULT NULL COMMENT '认证时间',
  `Phone` varchar(255) DEFAULT NULL COMMENT '联系手机',
  `UserClass` int(11) DEFAULT NULL COMMENT '用户认证类别',
  `UserCancelled` int(11) DEFAULT '0' COMMENT '用户取消通知 0 无1有',
  PRIMARY KEY (`Rid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_user_realname
-- ----------------------------

-- ----------------------------
-- Table structure for gg_user_school
-- ----------------------------
DROP TABLE IF EXISTS `gg_user_school`;
CREATE TABLE `gg_user_school` (
  `Sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `SchoolName` varchar(255) DEFAULT NULL COMMENT '学校名称',
  `Sequence` int(11) DEFAULT NULL COMMENT '排序',
  `Status` int(11) DEFAULT '1' COMMENT '学校状态',
  `Pid` int(11) DEFAULT '0' COMMENT '子id',
  PRIMARY KEY (`Sid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_user_school
-- ----------------------------

-- ----------------------------
-- Table structure for gg_user_status
-- ----------------------------
DROP TABLE IF EXISTS `gg_user_status`;
CREATE TABLE `gg_user_status` (
  `Sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `StatusName` varchar(255) DEFAULT NULL COMMENT '状态名',
  PRIMARY KEY (`Sid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_user_status
-- ----------------------------

-- ----------------------------
-- Table structure for gg_websetting
-- ----------------------------
DROP TABLE IF EXISTS `gg_websetting`;
CREATE TABLE `gg_websetting` (
  `Sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `WebTitle` varchar(255) DEFAULT NULL COMMENT '网站标题',
  `Keyword` varchar(255) DEFAULT NULL COMMENT '关键字',
  `Description` varchar(255) DEFAULT NULL COMMENT '描述',
  `Qq` int(11) DEFAULT NULL COMMENT 'qq',
  `Tel` char(11) DEFAULT NULL COMMENT '电话',
  `Phone` char(11) DEFAULT NULL COMMENT '手机',
  `Url` char(50) DEFAULT NULL COMMENT '网址',
  `CaseNumber` varchar(255) DEFAULT NULL COMMENT '备案号',
  `Qrcode` varchar(255) DEFAULT NULL COMMENT '二维码',
  `Email` varchar(255) DEFAULT NULL COMMENT '联系邮箱',
  `DefaultUserPortrait` varchar(255) DEFAULT NULL COMMENT '默认用户头像',
  `Address` varchar(255) DEFAULT NULL COMMENT '公司地址',
  `Copyright` varchar(255) DEFAULT NULL COMMENT '版权信息',
  `Status` int(11) DEFAULT '1' COMMENT '维护状态 0 维护 1可以使用',
  PRIMARY KEY (`Sid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of gg_websetting
-- ----------------------------
