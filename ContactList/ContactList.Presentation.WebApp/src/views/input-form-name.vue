<template>
    <InputName placeholder="Type contact name" v-model="name"></InputName>
</template>

<script>
    import InputName from '@/components/inputs/input-name.vue'

    export default {
        components: {
            InputName,
        },

        props: {
            preInputName: ""
        },

        mounted() {
            this.name = this.preInputName;
        },

        data() {
            return {
                name: "",
            }
        }
    }
</script>

<style scoped>
</style>