

import {
    GETPOSITION,SETPOSITION,
    LOGIN,
    CHANGEUSERINFO
} from './const'

let actions = {
    [GETPOSITION] ({commit}) {
        if(localStorage.city){
            commit(SETPOSITION,localStorage.city);return ;
        }

        //开始获取定位
        setTimeout(() => {
            let city = '北京'

            commit(SETPOSITION,city)
            localStorage.city = city
        }, 1500);
    },
    [LOGIN] ({commit},callback) {
        setTimeout(() => {
            commit(CHANGEUSERINFO,{


                username:'二狗子',
                tel:'12345'
            })
            callback()
        }, 1000);
    }
}

export default actions