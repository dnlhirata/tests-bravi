<template>
    <InputName placeholder="Type contact name" v-model="name" @input="emitValue"></InputName>
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