<template>
    <div>
        <b-form inline class="spaced-field">
            <InputEmail v-model="emailAddress" @input="onInputChange"></InputEmail>
            <SelectEmailType v-model="emailType" :selected="email.type" @selected="onSelectChange"></SelectEmailType>
            <InputCheckboxPrimary v-model="isPrimary" :primary="email.isPrimary" @ckChange="onCkChange"></InputCheckboxPrimary>
            <button class="delete-btn"><img class="icon-small" src="/images/delete-phone.png" @click="deleteEmail"/></button>
        </b-form>
    <p v-if="message" class="error-message">{{ message }}</p>
    </div>
</template>

<script>
    import base from "@/components/inputs/base.js";
    import InputEmail from "@/components/inputs/input-email.vue";
    import SelectEmailType from "@/components/inputs/select-email-type.vue";
    import InputCheckboxPrimary from "@/components/inputs/input-checkbox.vue";

    export default {
        
        mixins: [base],

        components: {
            InputEmail,
            SelectEmailType,
            InputCheckboxPrimary
        },

        props: ['email'],

        data() {
            return {
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

            deleteEmail: function () {
                if (this.email.isPrimary) {
                    this.message = "You cannot delete primary emails";
                } else {
                    this.$emit('deleteEmail', this.email);
                }                
            },
            
            onCkChange: function (value) {
                this.email.isPrimary = value;
            },

            onSelectChange: function (value) {
                this.email.type = value;
            },

            onInputChange: function (value) {
                this.email.emailAddress = value;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "base.less";
</style>