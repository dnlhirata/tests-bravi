<template>
    <div>
        <b-form inline class="spaced-field">
            <label class="sr-only" for="inline-form-input-email-address">Email</label>
            <b-input id="inline-form-input-email-address"
                     class="mb-2 mr-sm-2 mb-sm-0"
                     v-model="emailAddress"
                     placeholder="Type email address"></b-input>

            <label class="sr-only" for="inline-form-input-type">Type</label>
            <b-form-select class="mb-2 mr-sm-2 mb-sm-0 col-2" id="inline-form-input-type" v-model="emailType" :options="emailTypes"></b-form-select>
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" v-model="isPrimary">Is primary email?</b-form-checkbox>
            <button class="delete-btn"><img class="icon-small" src="/images/delete-phone.png" @click="deleteEmail(email)"/></button>
        </b-form>
    <p v-if="message" class="error-message">{{ message }}</p>
    </div>
</template>

<script>
    export default {

        props: ['email'],

        data() {
            return {
                emailTypes: [
                    { text: 'Personal', value: 'personal' },
                    { text: 'Work', value: 'work' },
                ],
                emailAddress: "",
                emailType: "",
                isPrimary: false,
                message: "",
            }
        },

        mounted() {
            this.emailAddress = this.email.emailAddress
            this.isPrimary = this.email.isPrimary
            this.emailType = this.email.type
        },

        methods: {

            deleteEmail: function (email) {
                if(email.isPrimary) {
                    this.message = "You cannot delete primary email";
                    return;
                }
                this.$emit('deleteEmail', email);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "base.less";
</style>