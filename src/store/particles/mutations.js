
import { 
    SETPOSITION,
    SETTITLE,
    SETTITLEBYROUTE,
    CHANGEUSERINFO
 } from './const'

let mutations = {
    [SETPOSITION] (state,city) {
        state.city = city
    },
    [SETTITLE] (state,title) {
        state.title = title
    },
    [SETTITLEBYROUTE] (state,route) {
        let title = ''
        switch(route.name){
            case 'home':title = '毕业设计';break;
            case 'films':title = '查看影片';break;
            case '404':title = 'Not Found';break;
            case 'login':title = '登陆';break;
            case 'mine':title = '我的';break;
            case 'shop':title = '商城';break;
            case 'shopdetail':title = '商品详情';break;
        }
        state.title = title
    },
    [CHANGEUSERINFO] (state,userInfo) {
        state.userInfo = userInfo
    }
}

export default mutations