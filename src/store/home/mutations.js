
import { 
    SET_BILLBOARDS
} from './const'

let mutations = {
    [SET_BILLBOARDS] (state,billboards) {
        state.billboards = billboards
    }
}

export default mutations