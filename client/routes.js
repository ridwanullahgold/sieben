import Router from 'vue-router'
import Home from '@pages/Home.vue'
import CandHome from '@pages/candidate/Home.vue'
import EmpHome from '@pages/employer/Home.vue'
import Sieben from '@pages/Sieben.vue'
import Login from '@pages/Login.vue'
import Register from '@pages/Register.vue'
import ForgotPassword from '@pages/ForgotPassword.vue'
import ResetPassword from '@pages/ResetPassword.vue'
export default new Router ({
    mode: 'history',
    routes:[
        {
        path : '/auth/login',
        component: Login
        },
        {
        path : '/',
        component: Home
        },
        {
        path : '/candidate',
        component: CandHome
        },
        {
        path : '/employer',
        component: EmpHome
        },
        {
        path : '/sieben',
        component: Sieben
        },
        {
        path : '/auth/register',
        component: Register
        },
        {
        path : '/auth/passwords/email',
        component: ForgotPassword
        },
        {
        path : '/auth/passwords/reset/:token',
        component: ResetPassword
        },
        ]
})