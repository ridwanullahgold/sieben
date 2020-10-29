 <div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <router-link class="navbar-brand" to="/">MEVN</router-link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/auth/login">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/auth/register">Register</router-link>
      </li>
    </ul>
  </div>
</nav>
<div class="container col-sm-8 auto">

   <router-view></router-view>
</div>