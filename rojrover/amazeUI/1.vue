<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta name="description" content="一个可以让您找到一件只属于您的设计师平台"/>
    <meta name="keywords" content="designer,DESIGNER,设计师，设计"/>
    <!-- Set render engine for 360 browser -->
    <meta name="renderer" content="webkit">
    <title>ipik</title>
    <link rel="stylesheet" href="assets/css/amazeui.min.css">
    <script src="assets/js/amazeui.min.js"></script>
    <script src="assets/js/vue.min.js"></script>
</head>
<body>
<template id="pre-search">
    <div class="wos-search-basic">
        <i class="am-icon-search"></i>
        <input type="text" placeholder="大鱼海棠" v-model="keywords"  v-on:click="searchShow(1)" v-on:blur="searchShow(0)">
        <button type="button" class="am-btn am-btn-primary am-fr">搜索</button>
        <a href="#" class="am-fr chart"><i class="am-icon-bar-chart"></i></a>
    </div>
    <div class="wos-pre-search"  v-show="preShow">
        <div v-if="keywords.length">
            <div class="wos-pre-search-title" v-show="sb">
                <div class="am-fl">搜索关键词：{{keywords}}</div>
                <div class="am-fr"><a href="#"><i class="am-icon-trash"></i> 清空</a></div>
            </div>
            <ul>
                <li v-show="sb" v-on:click="searchUrl(item.url)" v-for="item of cacheKeywords | filterBy keywords in 'words' " @click="search()">
                    {{ item.words }}
                </li>
            </ul>
        </div>
        <div v-else v-show="preShow">
            <div class="wos-pre-search-title" v-show="sb">
                <div class="am-fl">历史搜索: </div>
                <div class="am-fr"><a href="#"><i class="am-icon-trash"></i> 清空</a></div>
            </div>
            <ul>
                <li v-show="sb" v-on:click="searchLocal(item)" v-for="item of historyData | limitBy historyDataNum" >
                    {{ item }}
                </li>
                <hr>
                <li v-show="sb" v-on:click="searchUrl(item.url)" v-for="item of recommend | limitBy recommendNum" @click="search()" class="wos-ol wos-ol-{{ $index+1 }}">
                    <span>{{ $index+1 }}. </span>{{ item.words }}
                </li>
                <div v-show="sb" class="am-fr wos-search-more">
                    <a href="#" class="am-fr chart">
                        <i class="am-icon-bar-chart"></i> 今日热搜
                    </a>
                </div>
            </ul>
        </div>
    </div>
    <template>


        <script>
            historyData=['榴莲','百香果','泰国芒果','山东大苹果','广德鸭梨','新疆葡萄干','海南椰子'];
            recommend=[
                { words:'阿根廷红虾2kg/包 ￥158',url:'search.html?k=关键词或产品链接'},
                { words:'加拿大AAA级西冷牛排250g ￥75',url:'search.html?k=关键词或产品链接'},
                { words:'越南草虾(16-20只）400g ￥35',url:'search.html?k=关键词或产品链接'},
                { words:'澳洲草饲西冷牛排500g*2 牛扒 ￥138',url:'search.html?k=关键词或产品链接'},
                { words:'乌拉圭牛尾切片500g*2 牛肉 ￥92',url:'search.html?k=关键词或产品链接'},
                { words:'厄瓜多尔白虾2kg(50-60只/kg) 白虾 ￥149',url:'search.html?k=关键词或产品链接'}
            ];
            cacheKeywords = [
                { words:'虾米',url:'search.html?k=关键词或产品链接'},
                { words:'金锣优养冰鲜带筋猪蹄',url:'search.html?k=关键词或产品链接'},
                { words:'金锣优养冰鲜汤排',url:'search.html?k=关键词或产品链接'},
                { words:'易家菜园苍山山药',url:'search.html?k=关键词或产品链接'},
                { words:'潮香村黑椒牛排',url:'search.html?k=关键词或产品链接'},
                { words:'蔬氏意式沙拉',url:'search.html?k=关键词或产品链接'},
                { words:'美威欧式三文鱼排',url:'search.html?k=关键词或产品链接'},
                { words:'澳洲草饲西冷牛排',url:'search.html?k=关键词或产品链接'},
                { words:'阿根廷红虾',url:'search.html?k=关键词或产品链接'},
                { words:'西冷牛排',url:'search.html?k=关键词或产品链接'},
                { words:'越南草虾',url:'search.html?k=关键词或产品链接'},
                { words:'澳洲草饲西冷牛排',url:'search.html?k=关键词或产品链接'},
                { words:'乌拉圭牛尾切片',url:'search.html?k=关键词或产品链接'},
                { words:'厄瓜多尔白虾',url:'search.html?k=关键词或产品链接'},
                { words:'山东甜玉米',url:'search.html?k=关键词或产品链接'},
                { words:'昆明黄秋葵 ',url:'search.html?k=关键词或产品链接'},
                { words:'精选胡萝卜',url:'search.html?k=关键词或产品链接'},
                { words:'大蛤蜊肉',url:'search.html?k=关键词或产品链接'},
                { words:'优质香菇',url:'search.html?k=关键词或产品链接'},
                { words:'厄瓜多尔白虾',url:'search.html?k=关键词或产品链接'},
                { words:'金锣优养冰鲜汤排',url:'search.html?k=关键词或产品链接'},
                { words:'精选甜玉米',url:'search.html?k=关键词或产品链接'},
                { words:'新鲜本地甘蓝',url:'search.html?k=关键词或产品链接'},
                { words:'易家菜园西湖莼菜',url:'search.html?k=关键词或产品链接'},
                { words:'黄瓜',url:'search.html?k=关键词或产品链接'},
                { words:'越南草虾仁',url:'search.html?k=关键词或产品链接'}
            ];
            var vm = new Vue({
                el: '#search',
                data: {
                    message: 'Hello Vue.js!',
                    mainWidth:"500px",
                    sb:true,
                    historyData:historyData,
                    historyDataNum:5,//历史数据读取数量
                    recommend:recommend,
                    recommendNum:5,//推荐数据读取数量
                    keywords:'',
                    cacheKeywords:cacheKeywords,
                    preShow:false
                },
                template:"#pre-search",
                methods:{
                    searchShow:function(n){
                        if (n==1){
                            this.preShow = true
                        }else{
                            setTimeout(function(){
                                vm.preShow = false
                            },500)

                        }
                    },
                    searchLocal:function(keywords){
                        window.open("search.html?k=" + keywords);
                    },
                    searchUrl:function(url){
                        window.open(url);
                    }
                }
            })
        </script>
        <style>
            .wos-search-basic{
                padding: 5px 0px  0px 10px;
                border: 1px solid #0e90d2;
                height: 39px;
                color: #0e90d2;
                overflow: hidden;
                background-color: #fff;
                position: absolute;
                z-index: 9;
                width: 500px;
            }
            .wos-search-basic input{
                border: 0px;
                margin-top: -5px;
                outline:none;
                width: 70%;
            }
            .wos-search-basic button{
                margin:-5px -2px 0 0;
            }
            .chart{
                padding-right: 10px;
            }
            .wos-pre-search{
                border: 1px solid #0e90d2;
                border-top: 0px;
                position: absolute;
                background-color: #ffffff;
                /*filter:alpha(opacity=90);*/
                /*-moz-opacity:0.9;*/
                /*opacity:0.9;*/
                margin-top: 38px;
                width: 500px;
            }
            .wos-pre-search-title{
                font-size: 75%;
                width: 100%;
                color: #c1c1c1;
                padding:5px 10px;
            }
            .wos-pre-search ul{
                clear: both;
            }
            .wos-pre-search li{
                list-style-type: none;
                padding:5px 10px;
                cursor: pointer;
                font-size: 75%;
            }
            .wos-pre-search li:hover{
                background-color: #e4e4e4;
            }
            .wos-pre-search ul hr{
                margin: 0;
            }
            .wos-ol span{font-weight: bold}
            .wos-ol-1 span{color: #ff6600}
            .wos-ol-2 span{color: #fd7317}
            .wos-ol-3 span{color: #fd8433}
            .wos-search-more{
                color: #ff6600;
                margin-top: -22px;
                padding-bottom: 10px;
            }
            .wos-pre-search a{color: #000;}
            .wos-search-more a{
                color: #ff6600;
                font-size: 75%;
            }
        </style>
    </template>
</template>
</body>
</html>