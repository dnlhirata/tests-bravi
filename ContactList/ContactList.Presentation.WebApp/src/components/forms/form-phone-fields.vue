<template>
    <b-form inline class="spaced-field">
        <label class="sr-only" for="inline-form-input-number">Number</label>
        <b-input id="inline-form-input-name"
                 class="mb-2 mr-sm-2 mb-sm-0"
                 v-model="number"
                 placeholder="Type phone number"></b-input>

        <label class="sr-only" for="inline-form-input-type">Type</label>
        <b-form-select class="mb-2 mr-sm-2 mb-sm-0 col-2" id="inline-form-input-username" v-model="phoneType" :options="phoneTypes"></b-form-select>
        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" v-model="isWpp">Is WhatsApp?</b-form-checkbox>
        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" v-model="isPrimary">Is primary number?</b-form-checkbox>
    </b-form>
</template>

<script>
    export default {

        props: ['phone'],

        data() {
            return {
                phoneTypes: [
                    { text: 'Home', value: 'home' },
                    { text: 'Work', value: 'work' },
                    { text: 'Mobile', value: 'mobile' },
                    { text: 'Fax', value: 'fax' }
                ],
                number: "",
                phoneType: "",
                isWpp: false,
                isPrimary: false
            }
        },

        mounted() {
            this.number = this.phone.number
            this.isWpp = this.phone.isWhatsApp
            this.isPrimary = this.phone.isPrimary
            this.phoneType = this.phone.type
        }
    }
</script>

<style lang="less" scoped>
    @import "base.less";
</style>