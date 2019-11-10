<template>
    <input type="text" :value="value" @keyup="updateSelf($event.target.value)"/>
</template>

<script>
    import base from "@/components/inputs/base.js";

    export default {
        mixins: [base],
    }
    
</script>

<style lang="less" scoped>
     @import "base.less";
</style>