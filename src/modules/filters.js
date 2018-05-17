


import Vue from 'vue'

Vue.filter('date',function (value,modifier) {
    let date = new Date(value)
    return value?(date.getMonth()+1)+'月'+date.getDate()+'日'+(modifier?'上映':''):''
})

Vue.filter('day',function (value) {
    let date = new Date(value)
    let result = ''
    switch(date.getDay()){
        case 1:result = '一';break;
        case 2:result = '二';break;
        case 3:result = '三';break;
        case 4:result = '四';break;
        case 5:result = '五';break;
        case 6:result = '六';break;
        case 0:result = '日';break;
    }

    return '星期'+result
})

Vue.filter('money',function (value) {
    var f = parseFloat(value);
    if (isNaN(f)) {
        return false;
    }
    var f = Math.round(value)/100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
})

