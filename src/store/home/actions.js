

import {
    GET_BILLBOARDS,
    SET_BILLBOARDS,  
} from './const'

import axios from 'axios'
import config from '../../modules/config'
let actions = {
    [GET_BILLBOARDS] ({commit}) {
        axios.get('http://localhost:8080/api/giveData',{
            params:{__t:Date.now()}
        }).then(res => {
            // console.log(res.data.data.billboards)
            commit(SET_BILLBOARDS,res.data.data.billboards)
        })
    }
}

export default actions