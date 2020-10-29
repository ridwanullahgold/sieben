<template>
<div>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Job Hunt</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="CreativeLayers">

	<!-- Styles -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap-grid.css" />
	<!-- <link rel="stylesheet" href="css/icons.css"> -->
	<!-- <link rel="stylesheet" href="css/animate.min.css"> -->
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<link rel="stylesheet" type="text/css" href="css/responsive.css" />
	<!-- <link rel="stylesheet" type="text/css" href="css/chosen.css" /> -->
	<!-- <link rel="stylesheet" type="text/css" href="css/colors/colors.css" /> -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
<!-- <link rel="stylesheet" href="../../../maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" /> -->
	
</head>
<body>


<div class="theme-layout" id="scrollup">
	
	<div class="responsive-header">
		<div class="responsive-menubar">
			<div class="res-logo"><a href="index.html" title=""><img src="images/resource/logo.png" alt="" /></a></div>
			<div class="menu-resaction">
				<div class="res-openmenu">
					<img src="images/icon.png" alt="" /> Menu
				</div>
				<div class="res-closemenu">
					<img src="images/icon2.png" alt="" /> Close
				</div>
			</div>
		</div>
		<div class="responsive-opensec">
			<div class="btn-extars">
				<a href="employer_profile.html" title="" class="post-job-btn"><i class="la la-plus"></i>Post Jobs</a>
				<ul class="account-btns">
					<li><a title="" href="register.html"><i class="la la-key"></i> Sign Up</a></li>
					<li><a title="" href="login.html"><i class="la la-external-link-square"></i> Login</a></li>
				</ul>
			</div><!-- Btn Extras -->
			<form class="res-search">
				<input type="text" placeholder="Job title, keywords or company name" />
				<button type="submit"><i class="la la-search"></i></button>
			</form>
			<div class="responsivemenu">
				<ul>
					<li class="menu-item-has-children">
						<a href="index.html" title="">Home</a>
					</li>
					<li class="menu-item-has-children">
						<a href="employer_list3.html" title="">Find Jobs</a>
					</li>
					<li class="menu-item-has-children">
						<a href="#" title="">Candidates</a>
						<ul>
							<li><a href="candidates_list.html" title="">Candidates List</a></li>		
							<li><a href="candidates_single.html" title="">Candidate Single</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
	
	<header class="gradient">
		<div class="menu-sec">
			<div class="container">
				<div class="logo">
					<a href="index.html" title=""><img class="hidesticky" src="images/resource/image.png" alt="" /><img class="showsticky" src="images/resource/image.png" alt="" /></a>
				</div><!-- Logo -->
				<div class="btn-extars">
					<a href="employer_profile.html" title="" class="post-job-btn"><i class="la la-plus"></i>Post Jobs</a>
					<ul class="account-btns">
						<li><a title="" href="register.html" class="post-job-btn btn-primary"><i class="la la-key"></i> Sign Up</a></li>
						<li><a title="" href="login.html" class="post-job-btn btn-success"><i class="la la-external-link-square"></i> Login</a></li>
					</ul>
				</div><!-- Btn Extras -->
				<nav>
					<ul>
						<li class="menu-item-has-children">
							<a href="index.html" title="">Home</a>
						</li>
						<li class="menu-item-has-children">
							<a href="employer_list3.html" title="">Find Jobs</a>
						</li>
						<li class="menu-item-has-children">
							<a href="candidates_list.html" title="">Candidates</a>
						</li>
					</ul>
				</nav><!-- Menus -->
			</div>
		</div>
	</header>

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
									<li><a href="index.html" title="">Home</a></li>
									<li><a href="login.html" title="">Login</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

<!-- <router-view> </router-view> -->
	<section>
		<div class="block remove-bottom">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="account-popup-area signin-popup-box static">
							<div class="account-popup">
								<h3>Login</h3>
								<form>
									<div class="cfield">
										<input type="text" placeholder="Username" />
										<i class="la la-user"></i>
									</div>
									<div class="cfield">
										<input type="password" placeholder="********" />
										<i class="la la-key"></i>
									</div>
									 <div class="cfield">
                                        <select data-placeholder="City, province or region" class="chosen-city">
                                            <option>Candidate</option>
                                            <option>Employer</option>
                                        </select>
                                        <i class="la la-keyboard-o"></i>
                                    </div>
									<p class="remember-label">
										<input type="checkbox" name="cb" id="cb1"><label for="cb1">Remember me</label>
									</p>
									<a href="forget_password.html" title="">Forgot Password?</a>
									<button type="submit">Login</button>
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

	<footer>
		<div class="block bg-dark text-white">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 column">
						<div class="widget">
							<div class="about_widget">
								<div class="logo">
									<a href="index.html" title=""><img src="images/resource/image.png" alt="" /></a>
								</div>
								<span>57, Airport Road, Ilorin</span>
								<span>080-345-0695</span>
								<span><a href="https://grandetest.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f79e999198b79d98959f829983d994989a">[email&#160;protected]</a></span>
								<div class="social">
									<a href="#" title=""><i class="fa fa-facebook"></i></a>
									<a href="#" title=""><i class="fa fa-twitter"></i></a>
									<a href="#" title=""><i class="fa fa-linkedin"></i></a>
									<a href="#" title=""><i class="fa fa-pinterest"></i></a>
									<a href="#" title=""><i class="fa fa-behance"></i></a>
								</div>
							</div><!-- About Widget -->
						</div>
					</div>
					<div class="col-lg-4 column">
						<div class="widget">
							<h3 class="footer-title">Frequently Asked Questions</h3>
							<div class="link_widgets">
								<div class="row">
									<div class="col-lg-6">
										<a href="#" title="">Privacy & Seurty </a>
										<a href="#" title="">Terms of Serice</a>
										<a href="#" title="">Communications </a>
										<a href="#" title="">Referral Terms </a>
										<a href="#" title="">Lending Licnses </a>
										<a href="#" title="">Disclaimers </a>	
									</div>
									<div class="col-lg-6">
										<a href="#" title="">Support </a>
										<a href="#" title="">How It Works </a>
										<a href="#" title="">For Employers </a>
										<a href="#" title="">Underwriting </a>
										<a href="#" title="">Contact Us</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-2 column">
						<div class="widget">
							<h3 class="footer-title">Legal</h3>
							<div class="link_widgets">
								<div class="row">
									<div class="col-lg-12">
										<a href="index.html" title="">Home</a>	
										<a href="terms_and_condition.html" title="">Terms & Condition</a>	
										<a href="privacy_and_policy.html" title="">Privacy & Policy</a>	
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 column">
						<div class="widget">
							<h3 class="footer-title">Find Jobs</h3>
							<div class="link_widgets">
								<div class="row">
									<div class="col-lg-12">
										<a href="#" title="">US Jobs</a>	
										<a href="#" title="">Canada Jobs</a>	
										<a href="#" title="">UK Jobs</a>	
										<a href="#" title="">Emplois en Fnce</a>	
										<a href="#" title="">Jobs in Deuts</a>	
										<a href="#" title="">Vacatures China</a>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-line">
			<span>© 2018 Jobhunt All rights reserved. Design by Creative Layers</span>
			<a href="#scrollup" class="scrollup" title=""><i class="la la-arrow-up"></i></a>
		</div>
	</footer>

</div>

<div class="account-popup-area signin-popup-box">
	<div class="account-popup">
		<span class="close-popup"><i class="la la-close"></i></span>
		<h3>User Login</h3>
		<span>Click To Login With Demo User</span>
		<div class="select-user">
			<span>Candidate</span>
			<span>Employer</span>
		</div>
		<form>
			<div class="cfield">
				<input type="text" placeholder="Username" />
				<i class="la la-user"></i>
			</div>
			<div class="cfield">
				<input type="password" placeholder="********" />
				<i class="la la-key"></i>
			</div>
			<p class="remember-label">
				<input type="checkbox" name="cb" id="cbw2"><label for="cbw2">Remember me</label>
			</p>
			<a href="#" title="">Forgot Password?</a>
			<button type="submit">Login</button>
		</form>
		<div class="extra-login">
			<span>Or</span>
			<div class="login-social">
				<a class="fb-login" href="#" title=""><i class="fa fa-facebook"></i></a>
				<a class="tw-login" href="#" title=""><i class="fa fa-twitter"></i></a>
			</div>
		</div>
	</div>
</div><!-- LOGIN POPUP -->

<div class="account-popup-area signup-popup-box">
	<div class="account-popup">
		<span class="close-popup"><i class="la la-close"></i></span>
		<h3>Sign Up</h3>
		<div class="select-user">
			<span>Candidate</span>
			<span>Employer</span>
		</div>
		<form>
			<div class="cfield">
				<input type="text" placeholder="Username" />
				<i class="la la-user"></i>
			</div>
			<div class="cfield">
				<input type="password" placeholder="********" />
				<i class="la la-key"></i>
			</div>
			<div class="cfield">
				<input type="text" placeholder="Email" />
				<i class="la la-envelope-o"></i>
			</div>
			<div class="dropdown-field">
				<select data-placeholder="Please Select Specialism" class="chosen">
					<option>Web Development</option>
					<option>Web Designing</option>
					<option>Art & Culture</option>
					<option>Reading & Writing</option>
				</select>
			</div>
			<div class="cfield">
				<input type="text" placeholder="Phone Number" />
				<i class="la la-phone"></i>
			</div>
			<button type="submit">Signup</button>
		</form>
		<div class="extra-login">
			<span>Or</span>
			<div class="login-social">
				<a class="fb-login" href="#" title=""><i class="fa fa-facebook"></i></a>
				<a class="tw-login" href="#" title=""><i class="fa fa-twitter"></i></a>
			</div>
		</div>
	</div>
</div><!-- SIGNUP POPUP -->



</body>
</html>


 



</div>
</template>