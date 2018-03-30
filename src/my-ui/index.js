
import MyButton from './Button/Button.vue'
// import MyABC from './Button/Button.vue'

export default {
    install(Vue){
        Vue.component('my-button',MyButton)
        // Vue.component('my-abc',MyABC)
    }
}