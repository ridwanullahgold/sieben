<template>
    <div>
     <div class="card">
  <div class="card-header">
    Login Form
  </div>
  <div class="card-body">
      <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="login">
  <div class="form-group">
      <ValidationProvider rules="email" v-slot="{ errors }">
      <text-input
                    name="email"
                    type="email"
                    :value="model.email"
                    v-model="model.email"
                    placeholder="Enter your email"
                />
        <p class="text-danger" v-if="!!errors.email">
  {{ errors.email }}
</p>
    <p class="text-danger">{{ errors[0] }}</p>
</ValidationProvider>
             
  </div>
  <div class="form-group">
      <ValidationProvider rules="required" v-slot="{ errors }">
   <text-input
   name="password"
    type="password"
    :value="model.password"
    v-model="model.password"
    placeholder="Enter your password"
    @keypress="validate('required')"
/>
 <p class="text-danger">{{ errors[0] }}</p>
   <p class="text-danger" v-if="!!errors.password">
  {{ errors.password }}
</p>
</ValidationProvider>
  </div>
   <btn
    type="submit"
    label="Sign In"
    :disabled="invalid"
    :loading="loading"
    
    />
                    <router-link to="/auth/passwords/email" class="no-underline text-brown">Forgot Password ?</router-link>

  <!-- <button type="submit" :disabled="invalid" class="btn btn-primary">Register</button> -->
  </form>
  </ValidationObserver>
  </div>
</div>

    </div>
</template>

<script>
import { POST_LOGIN } from '@store/auth/actions'
    export default {
        data: () => ({
             loading: false,
            model: {
              
                email: '',
                password: ''
            },
    //         errors: {
    //     name: '',
    //     email: "",
    //     password: "",
    //   },
        }),
        methods:{
         login () {
             this.toggleLoading()
           this.$store.dispatch(POST_LOGIN, this.model)
           .then(response=> {
               this.toggleLoading()
               this.setAuth(response.data)
           }).catch(error => {
               this.toggleLoading()
                // error.response.data => { email: 'This user already exists' }
                // => ['email']
                // this.errors.add({ field: 'email', msg: 'This user already exists' })
                
                 Object.keys(error.response.data).forEach(field => {
                errors = Object.assign({
                    field,
                    msg: error.response.data[field]
                })
                 })
            
            
    
           })
      
    },
    toggleLoading() {
                this.loading = !this.loading
            }
        }

    }
</script>