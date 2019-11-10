<template>
    <div>
        <h4 class="header-text">Fill in the details to add a new contact</h4>
        <div>
            <InputFormName ref="input" :preInputName:="preInputName" v-model="contactInputName"/>
            <InputEmail v-model="email" placeholder="Type contact email"/>
        </div>    
        <div>
             <InputPhoneNumber v-model="phoneNumber" placeholder="Type contact phone number"/>
             <InputCheckbox v-model="isWhatsApp"/>
        </div>
        <div>
            <CommonButton @click="addContact">Confirm</CommonButton>
        </div>
    </div>
</template>

<script>
    import InputFormName from '@/views/input-form-name.vue'
    import InputEmail from '@/components/inputs/input-email.vue'
    import InputPhoneNumber from '@/components/inputs/input-phone-number.vue';
    import InputCheckbox from '@/components/inputs/input-checkbox.vue';
    import CommonButton from '@/components/buttons/common-button.vue'
    import ContactService from '@/services/api-services/contact-service.js'

    export default {

        data() {
            return {
                name: "",
                email: "",
                phoneNumber: "",
                isWhatsApp: false,
            }
        },

        components: {
            InputFormName,
            InputEmail,
            InputPhoneNumber,
            InputCheckbox,
            CommonButton
        },

        methods: {
            addContact: function (){                
                let self = this;

                let phone = { number: self.phoneNumber, isWhatsApp: self.isWhatsApp }
                let email = { emailAddress: self.email }
                ContactService.addNewContact(self.name, phone, email);
            }
        }
    };

</script>

<style scoped>
    .header-text {
        font-size: 22px;        
    }

</style>