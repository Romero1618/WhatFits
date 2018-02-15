<template>
    <div id=Login>
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box"> 
                    <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email">
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                        </span>
                    </p>
                    </div>

                    <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password">
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                    </p>
                    </div>
                    <div class="field is-grouped is-grouped-centered">
                        <p class="control">
                            <a class="button is-primary">
                            Submit
                            </a>
                        </p>
                        <p class="control">
                            <a class="button is-light">
                            Cancel
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'Login',
    data: {
        showLogin: false
    }

}
</script>

<style>

</style>
