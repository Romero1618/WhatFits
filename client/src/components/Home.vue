<template>
  <div>
    <navbar></navbar>

    <section id = "login">
        <div class="modal">
            <div class="modal-background"></div>
                <div class="modal-content">
                </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
    </section>

    <section id = "showcase">
        <div class = "container">
            <h1>Find what fitness fits with you</h1>
            <p>Fitness based social media platform that will connect others </p>
        </div>
    </section>

    <section id ="Home-Registration">
        <div class = "container">
            <h1>Register for Whatfits</h1>
            <form>
                <h2>Username</h2>
                <input type = "username" placeholder = "Enter Username">
                <h2>Password</h2>
                <input type = "password" placeholder = "Enter Password">
                <h2>Confirm Password</h2>
                <input type = "confirmPassword" placeholder = "Confirm Password">
                <div class = "checkbox">
                    LA/OC resident<input type = "checkbox" name = "resident" value = "LA/OC resident"><br>
                    18 years or older<input type = "checkbox" name = "year" value = "18 years or older">
                </div>
                <div id = "RegisterButton">
                    <router-link to = "/registration" tag = "button" @click.native = "checkCredentials" >Continue Registration</router-link>
                </div>
            </form>
        </div>
    </section>

  </div>
</template>

<script>
import navbar from './Navbar.vue'
// import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Home',
  components: { navbar },
  data: {
      
  },
  methods: {
    checkCredentials () {
      alert('HEllo')
    }
  }
}
</script>

<style>
.form.h2{
    float: left;
    clear: right;
}
.form.input{
    float: right;
}
</style>