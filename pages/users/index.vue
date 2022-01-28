<template>
    <section>
        <h1>{{ pageTitle }}</h1>

        <ul>
            <li v-for="user in getUsers" :key="user.id">
                <a href="#" @click.prevent="getUser(user.id)">User {{ user.name }}</a>
            </li>
        </ul>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data: () => ({
        pageTitle: 'Users page'
    }),
    async fetch({ store }) {
        if (store.getters['users/getUsers'].length === 0) {
            await store.dispatch('users/fetchUsers');
        }
    },
    computed: {
        ...mapGetters('users', ['getUsers'])
    },
    methods: {
        getUser(id) {
            this.$router.push(`/users/${id}`);
        }
    }
};
</script>

<style>
</style>
