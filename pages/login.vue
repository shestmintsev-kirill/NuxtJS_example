<template>
    <section>
        <div v-if="$route.query.message" class="alert alert-danger mb-3">Need login</div>
        <form @submit.prevent="onSubmit()">
            <h1>Login page</h1>
            <div class="form-group">
                <input class="form-control" />
            </div>
            <p><nuxt-link to="/">To home page</nuxt-link></p>
            <button class="btn btn-primary" type="submit">Login</button>
        </form>
    </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    layout: 'empty',
    methods: {
        ...mapActions(['login']),
        onSubmit() {
            this.login();
            this.$router.push('/');
        }
    }
};
</script>

<style>
</style>
