<template>
    <input type="text" :value="value" @keyup="updateSelf($event.target.value)"/>
</template>

<script>
    import Cleave from 'cleave.js';
    import base from "@/components/inputs/base.js";

    export default {

        mixins: [base],

        mounted: function () {
            new Cleave(this.$el, {
                numericOnly: true,
                blocks: [0, 2, 0, 9],
                delimiters: ["(", ")", " "]
            });
        }
    }
    
</script>

<style lang="less" scoped>
    @import "base.less";
</style>