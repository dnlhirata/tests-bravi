<template>
    <div>
        <label class="sr-only" for="inline-form-input-email-name">Name</label>
        <b-input id="inline-form-input-name"
                 class="mb-2 mr-sm-2 mb-sm-0"
                 placeholder="Type name"
                 type="text" :value="value" @keyup="updateSelf($event.target.value)"></b-input>
    </div>
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