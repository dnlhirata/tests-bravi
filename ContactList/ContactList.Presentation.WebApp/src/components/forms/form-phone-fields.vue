<template>
    <div>
        <b-form inline class="spaced-field">
            <InputPhone v-model="number" @input="onInputChange"></InputPhone>
            <SelectPhoneType v-model="phoneType" :selected="phone.type" @selected="onSelectChange"></SelectPhoneType>
            <InputCheckboxPrimary v-model="isPrimary" :primary="phone.isPrimary" @ckChange="onCkChange"></InputCheckboxPrimary>
            <InputCheckboxWpp v-model="isPrimary" :primary="phone.isPrimary" @ckChange="onCkChange"></InputCheckboxWpp>
            <button class="delete-btn"><img class="icon-small" src="/images/delete-phone.png" @click="deletePhone"/></button>
        </b-form>
    <p v-if="message" class="error-message">{{ message }}</p>
    </div>
</template>

<script>
    import base from "@/components/inputs/base.js";
    import InputPhone from "@/components/inputs/input-phone-number.vue";
    import SelectPhoneType from "@/components/inputs/select-phone-type.vue";
    import InputCheckboxPrimary from "@/components/inputs/input-checkbox.vue";
    import InputCheckboxWpp from "@/components/inputs/input-checkbox-whats.vue";

    export default {
        
        mixins: [base],

        components: {
            InputPhone,
            SelectPhoneType,
            InputCheckboxPrimary,
            InputCheckboxWpp
        },

        props: ['phone'],

        data() {
            return {
                number: "",
                phoneType: "",
                isPrimary: false,
                message: "",
            }
        },

        mounted() {
            this.number = this.phone.number
            this.isPrimary = this.phone.isPrimary
            this.phoneType = this.phone.type
        },

        methods: {

            deletePhone: function () {
                if (this.phone.isPrimary) {
                    this.message = "You cannot delete primary phone numbers";
                } else {
                    this.$emit('deletePhone', this.phone);
                }                
            },
            
            onCkChange: function (value) {
                this.phone.isPrimary = value;
            },

            onSelectChange: function (value) {
                this.phone.type = value;
            },

            onInputChange: function (value) {
                this.phone.number = value;
            },

            onCkWppChange: function (value) {
                this.phone.isWhatsApp = value;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "base.less";
</style>