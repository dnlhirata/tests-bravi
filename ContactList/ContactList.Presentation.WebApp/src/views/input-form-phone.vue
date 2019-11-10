<template>
    <InputPhone placeholder="Type contact phone" v-model="phone" @input="emitValue"></InputPhone>
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
        },

        methods: {
            emitValue: function () {
                this.error = false;
                this.$emit('input', this.name);
            },
        }
    }
</script>

<style scoped>
</style>