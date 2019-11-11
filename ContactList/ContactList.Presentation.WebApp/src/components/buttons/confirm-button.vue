<template>
    <button @click="onClick">Confirm</button>
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
        color: green;
     }
</style>