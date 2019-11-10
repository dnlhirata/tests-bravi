<template>
    <InputEmail placeholder="Type contact email" v-model="email"></InputEmail>
</template>

<script>
    import InputEmail from '@/components/inputs/input-email.vue'

    export default {
        components: {
            InputEmail,
        },

        props: {
            preInputEmail: ""
        },

        mounted() {
            this.email = this.preInputEmail;
        },

        data() {
            return {
                email: "",
            }
        }
    }
</script>

<style scoped>
</style>