<template>
    <input type="checkbox" :checked="value" @change="updateSelf($event.target.checked)" @click="click"/>
</template>

<script>
    import base from "@/components/inputs/base.js";
    
    export default {

        mixins: [base],
        
        methods: {
            click: function () {
                this.$emit("click");
            }
        }
    }
    
</script>

<style scoped>
</style>