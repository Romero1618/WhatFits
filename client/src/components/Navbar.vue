<template>
  <div id="navbar">
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <h1 class="title is-3">WhatFits</h1>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a @click="toHome" class="navbar-item">
            Home
          </a>
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Contact Us
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
              <p class="control">
                <login></login>
                <a class="button is-primary is-inverted">Login</a>
              </p>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import login from './Login.vue'
export default {
    name: 'navbar',
    components: { login },
    methods: {
        toHome: function() {
            this.$router.push('/')
        },
        test: function() {
          alert('hi')
        }
    }

}
</script>

<style>
    .button{ background: #e3e3e3; padding: 10px; boarder: 1px solid #c5c5c5}
</style>