<template>
    <div>

	<section>
		<div class="block no-padding  gray">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="inner2">
							<div class="inner-title2">
								<h3>Register</h3>
								<span>Keep up to date with the latest news</span>
							</div>
							<div class="page-breacrumbs">
								<ul class="breadcrumbs">
								<li><router-link to="/" title="">Home</router-link></li>
									<li><router-link to="/auth/register" title="">Register</router-link></li>
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
						<div class="account-popup-area signup-popup-box static">
							<div class="account-popup">
								<h3>Sign Up</h3>
								<form @submit.prevent="register">
							<form-input
							label="Name"
							placeholder="Full Name"
							v-model="model.name"
							type="text"
							@validate="validate('name')"
							name="Name"
							:error="errors.name"
							>
							</form-input>
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
			<select v-model="model.category" name="category" class="form-control" >
											<option>Web Development</option>
											<option>Web Designing</option>
											<option>Art & Culture</option>
											<option>Reading & Writing</option>
										</select>
									</div>
									
									<form-input
  label="Phone Number"
  placeholder="Enter your Phone Number"
  v-model="model.phone"
  type="text"
  @validate="validate('phone')"
  name="phone"
  :error="errors.phone"
  >
</form-input>

              <div class="cfield">
                    <select v-model="model.type" name="type" class="form-control">
                        <option>Candidate</option>
                        <option>Employer</option>
                    </select>
                      <i class="la la-keyboard-o"></i>
                    </div>
								
									<btn
    type="submit"
    label="Sign Up"
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
						</div><!-- SIGNUP POPUP -->
					</div>
				</div>
			</div>
		</div>
	</section>

    </div>
</template>

<script>
import * as Yup from 'yup'
const RegisterSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email('Must be a valid Email Address').required(),
    phone: Yup.string().required(),
    password: Yup.string().min(5, 'Password must be at least 6 characters').required()
})
import { POST_REGISTER } from '@store/auth/actions'
    export default {
        data: () => ({
             loading: false,
            model: {
                name: '',
                email: '',
                phone: '',
                category: 'Web Development',
                password: '',
                type: "Candidate",
            },
            errors: {
        		name: '',
                email: '',
                phone: '',
                password: ''
      },
        }),
        methods:{
         register () {
             this.toggleLoading()
           this.$store.dispatch(POST_REGISTER, this.model)
           .then(response=> {
               this.toggleLoading()
               this.flash('Succesfully registered.')
                this.setAuth(response.data)
               
           }).catch(error => {
               this.toggleLoading()
               Object.keys(error.response.data).forEach(field => {
                 this.errors[field] = error.response.data[field];
           })
            
            
    
           })
      
    },
     validate(field) {
      RegisterSchema
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