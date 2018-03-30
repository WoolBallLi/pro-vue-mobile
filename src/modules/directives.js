

import Vue from 'vue'

//检测滚动距离后执行相应的动作
Vue.directive('scroll-handler',function (el,binding) {
    let distance = el.getAttribute('scroll-distance')
    window.addEventListener('scroll',function (e) {
       if(document.documentElement.scrollTop>distance){
            binding.value()
       }
    })
})

//检测滚动距离并在关键的地方更改执行的数据 boolean
Vue.directive('scroll-show',function (el,binding) {
    let distance = el.getAttribute('scroll-distance')
    window.addEventListener('scroll',function (e) {
       if(document.documentElement.scrollTop>distance){
            binding.value.value = true
       }else{
            binding.value.value = false
       }
    })
})

//回到顶部
Vue.directive('back-top',{
    bind(el){
        el.onclick = function () {
            document.documentElement.scrollTop = 0
        }
    }
})