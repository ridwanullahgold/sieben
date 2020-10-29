import Vue from 'vue';
import Main from './pages/Main.vue'
import Sieben from './pages/Sieben.vue'
// import './styles/main.css'
import './styles/bootstrap-grid.css'
import './styles/style.css'
import './styles/responsive.css'
// import './styles/icons.css'
// import './styles/chosen.css'
import './styles/bootstrap.css'
import './styles/animate.min.css'
import './styles/colors/colors.css'

import router from './routes'
import rout from './newroutes'
import Router from 'vue-router'
import store from './store'
import authMixin from '@client/mixins/auth';
import flashMixin from '@client/mixins/flash'
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { alpha, required, email } from 'vee-validate/dist/rules';
import Button from '@components/Button.vue'
import Select from '@components/Select.vue'
import Loader from '@components/Loader.vue'
import TextInput from '@/client/components/TextInput.vue'
import FormInput from '@/client/components/FormInput.vue'
extend('alpha', alpha);
extend('email', {
    ...email,
    message: 'E-mail must be valid'
  });
extend('required', 
    required,
  );

Vue.use(Router)

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('btn', Button)
Vue.component('loader', Loader)
Vue.component('text-input', TextInput)
Vue.component('form-input', FormInput)
Vue.component('select-input', Select)
Vue.mixin(authMixin)
Vue.mixin(flashMixin)

const app = new Vue({
    el:'#app',
    router,
    store,
    render: h => h(Main)
})

