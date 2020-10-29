<template>
  <div>
	<section>
		<div class="block no-padding  gray">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="inner2">
							<div class="inner-title2">
								<h3>Login</h3>
								<span>Keep up to date with the latest news</span>
							</div>
							<div class="page-breacrumbs">
								<ul class="breadcrumbs">
									<li><router-link to="/" title="">Home</router-link></li>
									<li><router-link to="/auth/login" title="">Login</router-link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="block remove-bottom">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="account-popup-area signin-popup-box static">
							<div class="account-popup">
								<h3> Password Reset Form </h3>
<form @submit.prevent="reset">

 
<form-input
  label="Password"
  v-model="model.password"
  placeholder="Enter your password"
  type="password"
    value="model.password"
  name="password"
  :error="errors.password"
  autocomplete="current-password"
  >
  
</form-input>

<form-input
  value="model.passwordConfirmation"
  label="Confirm Password"
  v-model="model.passwordConfirmation"
  placeholder="Enter your password"
  type="password"
  name="passwordConfirmation"
  :error="errors.passwordConfirmation"
  autocomplete="current-password"
  >
  
</form-input>
  				
									<router-link to="/auth/login" title="">Login</router-link>
                  <btn
    type="submit"
    label="Reset"
    :loading="loading"
    />

								</form>
						
							</div>
						</div><!-- LOGIN POPUP -->
					</div>
				</div>
			</div>
		</div>
	</section>
  </div>
</template>


<script>

import * as Yup from 'yup'

const ResetSchema = Yup.object().shape({
    password: Yup.string().label('Password')
        .min(6)
        .required('Password is required'),
    passwordConfirmation: Yup.string().label('Password Confirmation')
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

import { POST_RESET_PASSWORD } from '@store/auth/actions'
    export default {
        data: () => ({
             loading: false,
            model: {
        password: "",
        passwordConfirmation: ""
      },
      errors: {
        password: "",
        passwordConfirmation: ""

      },
        }),
        methods:{
         reset () {
             this.toggleLoading()
           ResetSchema
            .validate(this.model, { abortEarly: false })
        .then(() => {
          this.errors = {};
          this.$store.dispatch(POST_RESET_PASSWORD, {
              ...this.model, token:this.$route.params.token })
          .then(response=> {
               this.toggleLoading()
               this.flash('Password has been reset successfully.')
               this.$router.push('/auth/login')
           }).catch(error => {
             this.errors = [];
               this.toggleLoading()
              //  console.log(error.response.data)
               Object.keys(error.response.data).forEach(field => {
                 this.errors[field] = error.response.data[field];
           })
        })
        })
        .catch(err => {
           this.toggleLoading()
          err.inner.forEach(error => {
            this.errors[error.path] = error.message;
          });
        });

    },
      validate(field) {
      ResetSchema
        .validateAt(field, this.model)
        .then(() => {
          this.errors[field] = "";
        })
        .catch(err => {
          this.errors[err.path] = err.message;
        });
    },
    toggleLoading() {
                this.loading = !this.loading
            }
        }

    }
</script>