<template>
    <div>
        <input type="checkbox" :checked="value" @change="updateSelf($event.target.checked)" @click="click">
        <label><slot /></label>
    </div>
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
    input {
        margin-bottom: 10px;
    }
</style>