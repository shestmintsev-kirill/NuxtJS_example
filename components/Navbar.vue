<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Nuxt</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link active-class="active" class="nav-link" to="/about">About</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link active-class="active" class="nav-link" to="/users">Users</nuxt-link>
                    </li>
                    <li v-if="!hasToken" class="nav-item">
                        <nuxt-link active-class="active" class="nav-link" to="/login">Login</nuxt-link>
                    </li>
                    <li v-else class="nav-item">
                        <a active-class="active" class="nav-link" href="#" @click.prevent="onLogout()">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'NuxtTutorial',
    computed: {
        ...mapGetters(['hasToken'])
    },
    methods: {
        onLogout() {
            this.$store.dispatch('logout');
            this.$router.push('/login');
        }
    }
};
</script>
