<template>
    <InputEmail placeholder="Type contact email" v-model="email" @input="emitValue"></InputEmail>
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
        },

        methods: {
            emitValue: function () {
                this.error = false;
                this.$emit('input', this.email);
            },
        }
    }
</script>

<style scoped>
</style>