<template>
    <div>
        <b-form inline class="spaced-field">
            <label class="sr-only" for="inline-form-input-number">Number</label>
            <b-input id="inline-form-input-name"
                     class="mb-2 mr-sm-2 mb-sm-0"
                     v-model="number"
                     placeholder="Type phone number"></b-input>

            <label class="sr-only" for="inline-form-input-type">Type</label>
            <b-form-select class="mb-2 mr-sm-2 mb-sm-0 col-2" id="inline-form-input-type" v-model="phoneType" :options="phoneTypes"></b-form-select>
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" v-model="isWpp">Is WhatsApp?</b-form-checkbox>
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" v-model="isPrimary">Is primary number?</b-form-checkbox>
            <button class="delete-btn"><img class="icon-small" src="/images/delete-phone.png" @click="deletePhone(phone)"/></button>
        </b-form>
        <p v-if="message" class="error-message">{{ message }}</p>
    </div>
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
                isPrimary: false,
                message: "",
            }
        },

        mounted() {
            this.number = this.phone.number
            this.isWpp = this.phone.isWhatsApp
            this.isPrimary = this.phone.isPrimary
            this.phoneType = this.phone.type
        },

        methods: {

            deletePhone: function (phone) {
                if(phone.isPrimary) {
                    this.message = "You cannot delete primary number";
                    return;
                }
                this.$emit('deletePhone', phone);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "base.less";
</style>