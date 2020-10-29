<template>

    <div class="text-center text-lg" style="font-size:30px;">

<div class="alert alert-dismissible fade show" :class="{ 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }" role="alert" v-for="message in flashMessages" :key="message.id">
  <strong class="text-uppercase">{{message.type}}</strong> 
  {{ message.message }}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

      
    </div>
</template>