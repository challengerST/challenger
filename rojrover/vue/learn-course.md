*注意格式大小写*
*var app2 =new Vue({
        el:"#app-2",
        data:{
            meassage:'you should this page on' + new Date()
        }
    })
不用以分号结尾
    *
    *得熟练掌握对象数组的增删改查操作*
    *methods:相当于回调函数的集合*
    *v-model:相当于angular.js的双向绑定事件*
    *v-bind:"message" 这里的message既可以是变量也可以是函数但是不需要像getter那样加双括号*
    *v-on*
    *v-if*
    *computed与methods的区别是在于是否在html里面加上那个:v-on事件如果加上的话直接使用 methods，没加的话就使用双括号将函数作为变量传入，直接；最好是使用computed因为有缓存以至于不需要每次调用的时候再重新获取getter，也就是需要实时更新的用methods如果是大规模数组的最好还是不要用method而只用*
