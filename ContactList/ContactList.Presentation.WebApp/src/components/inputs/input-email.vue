<template>
    <div>
        <label class="sr-only" for="inline-form-input-email-address">Email</label>
        <b-input id="inline-form-input-email-address"
                 class="mb-2 mr-sm-2 mb-sm-0"
                 placeholder="Type email address"
                 type="email" :value="value" @keyup="updateSelf($event.target.value)"></b-input>
    </div>
</template>

<script>
    import base from "@/components/inputs/base.js";

    export default {

        mixins: [base],     

    }
</script>

<style lang="less" scoped>
</style>