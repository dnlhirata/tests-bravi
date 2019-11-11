<template>
    <div>
        <h4 class="header-text">Fill in the details to add a new contact</h4>
        <div>
            <InputFormName  :preInputName="preInputName" v-model="contactName"/>
            <InputFormEmail :preInputEmail="preInputEmail" v-model="contactEmail"/>
        </div>    
        <div>
             <InputFormPhone :preInputEmail="preInputPhone" v-model="contactPhone"/>
             <InputCheckbox v-model="isWhatsApp">The phone number is a WhatsApp number?</InputCheckbox>
        </div>
        <div>
            <ConfirmButton @click="addContact">Confirm</ConfirmButton>
        </div>
    </div>
</template>

<script>
    import InputFormName from '@/views/input-form-name.vue'
    import InputFormEmail from '@/views/input-form-email.vue'
    import InputFormPhone from '@/views/input-form-phone.vue';
    import InputCheckbox from '@/components/inputs/input-checkbox.vue';
    import ConfirmButton from '@/components/buttons/confirm-button.vue'
    import ContactService from '@/services/api-services/contact-service.js'

    export default {

        data() {
            return {
                contactName: "",
                contactEmail: "",
                contactPhone: "",
                preInputName: "",
                preInputEmail: "",
                preInputPhone: "",
                isWhatsApp: false,
            }
        },

        components: {
            InputFormName,
            InputFormEmail,
            InputFormPhone,
            InputCheckbox,
            ConfirmButton
        },

        methods: {
            addContact: function (){    
                let self = this;

                if (self.contactName == "") {
                    return;
                }
                
                if (self.contactPhone == "") {
                    return;
                }

                if (self.contactEmail == "") {
                    return
                }

                let phone = { number: this.contactPhone, isWhatsApp: this.isWhatsApp }
                let email = { emailAddress: this.contactEmail }
                ContactService.addNewContact(self.contactName, phone, email)
                    .then(function () {
                        self.$router.push('/');
                        location.reload();
                    });
            }
        }
    };

</script>

<style scoped>
    .header-text {
        font-size: 22px;        
    }

</style>