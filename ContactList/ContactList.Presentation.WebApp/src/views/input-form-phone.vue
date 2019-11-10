<template>
    <InputPhone placeholder="Type contact phone" v-model="phone"></InputPhone>
</template>

<script>
    import InputPhone from '@/components/inputs/input-phone-number.vue'

    export default {
        components: {
            InputPhone,
        },

        props: {
            preInputPhone: ""
        },

        mounted() {
            this.phone = this.preInputPhone;
        },

        data() {
            return {
                phone: "",
            }
        }
    }
</script>

<style scoped>
</style>