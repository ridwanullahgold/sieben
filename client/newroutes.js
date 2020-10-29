import Router from 'vue-router'
import Sieben from '@pages/Sieben.vue'
import Login from '@pages/Login.vue'
export default new Router ({
    mode: 'history',
    routes:[
        {
        path : '/auth',
        component: Login
        },
      
        ]
})