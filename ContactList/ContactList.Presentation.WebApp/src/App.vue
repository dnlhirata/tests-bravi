<template>
    <div id="app">
        <title>Contact List</title>
        <header>
            <StructureHeader />
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Home from '@/views/home.vue';
    import StructureHeader from '@/components/structure/header.vue';

    export default {
        name: 'app',
        components: {
            Home,
            StructureHeader
        }
    };
</script>

<style>
</style>

