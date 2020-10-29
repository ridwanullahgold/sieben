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
								<h3>Login</h3>
								<form @submit.prevent="login">
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

								<form-input
  label="Password"
  placeholder="Enter your password"
  v-model="model.password"
  type="password"
  @validate="validate('password')"
  name="Password"
  :error="errors.password"
  autocomplete="current-password"
  >
</form-input>	
									 <div class="cfield">
                    <select v-model="model.type" name="type" class="form-control">
                        <option>Candidate</option>
                        <option>Employer</option>
                    </select>
                      <i class="la la-keyboard-o"></i>
                    </div>
									<p class="remember-label">
										<input type="checkbox" name="cb" id="cb1"><label for="cb1">Remember me</label>
									</p>
									<router-link to="/auth/passwords/email" title="">Forgot Password?</router-link>
                  <btn
    type="submit"
    label="Sign In"
    :loading="loading"
    />
								
								</form>
								<div class="extra-login">
									<span>Or</span>
									<div class="login-social">
										<a class="fb-login" href="#" title=""><i class="la la-facebook"></i></a>
										<a class="tw-login" href="#" title=""><i class="la la-google"></i></a>
									</div>
								</div>
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

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .min(5, 'Password must be at least 6 characters')
        .required()
})

import { POST_LOGIN } from '@store/auth/actions'
    export default {
        data: () => ({
             loading: false,
            model: {
        email: "",
        password: "",
        type: "Candidate",
      },
      errors: {
        email: "",
        password: "",
      },
        }),
        methods:{
         login () {
             this.toggleLoading()
           LoginSchema
            .validate(this.model, { abortEarly: false })
        .then(() => {
          this.errors = {};
          this.$store.dispatch(POST_LOGIN, this.model)
          .then(response=> {
               this.toggleLoading()
               this.flash('Logged In Successfully......')
               this.setAuth(response.data)
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
      LoginSchema
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