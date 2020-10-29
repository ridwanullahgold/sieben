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
								<h3>Forgot Password Form </h3>
								<form @submit.prevent="forgotPassword">
                  							<form-input
  label="Email"
  placeholder="Email address"
  v-model="model.email"
  type="email"
  @validate="validate('email')"
  name="Email"
  :error="errors.email"
  >
</form-input>

					
									
									<router-link to="/auth/login" title="">Login</router-link>
                  <btn
    type="submit"
    label="Send Password Reset Link"
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

const ForgotSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    
})
import { POST_FORGOT_PASSWORD } from '@store/auth/actions'
    export default {
        data: () => ({
             loading: false,
            model: {
               email: '',
            },
            errors: {
        email: "",
      },
        }),
        methods:{
         forgotPassword () {
             this.toggleLoading()
           this.$store.dispatch(POST_FORGOT_PASSWORD, this.model)
           .then(response=> {
               this.toggleLoading()
               this.flash('Password reset link sent. It expires in 1 hour')
               this.$router.push('/')
           }).catch(error => {
               this.toggleLoading()
                   Object.keys(error.response.data).forEach(field => {
                 this.errors[field] = error.response.data[field];
           })
        })
    },
    validate(field) {
      ForgotSchema
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