<template>
    <button @click="onClick">Delete</button>
</template>

<script>
    import base from '@/components/buttons/base.js';

    export default {

        mixins: [base]

    }
</script>

<style lang="less" scoped>
     @import "base.less";

     button {
        color: red;
     }
</style>