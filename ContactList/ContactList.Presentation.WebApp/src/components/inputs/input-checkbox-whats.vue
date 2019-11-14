<template>
    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" v-model="ck" @change="onChange">Is WhatsApp?</b-form-checkbox>
</template>

<script>
    import base from "@/components/inputs/base.js";
    
    export default {

        mixins: [base],

        props: ['primary'],

        data() {
            return {
                ck: this.primary
            }
        },
        
        methods: {
            onChange: function (value) {
                this.$emit("ckChange", value);
            }
        }
    }
    
</script>

<style scoped>
    input {
        margin-bottom: 10px;
    }
</style>