<template>
    <section>
        <h1>{{ user.name }}</h1>
        <h3>{{ user.email }}</h3>
        <nuxt-link to="/users">Back to users</nuxt-link>
    </section>
</template>

<script>
export default {
    validate({ params }) {
        return !!Number(+params.id);
    },
    async asyncData({ $axios, params }) {
        const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        return { user };
    }
};
</script>

<style>
</style>
