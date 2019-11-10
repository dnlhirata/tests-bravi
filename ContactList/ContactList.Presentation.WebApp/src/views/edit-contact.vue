<template>
    <div>
        <h4 class="header-text">Fill in the details to add a new contact</h4>
        <div>
            <InputFormName :preInputName="preInputName" v-model="contactName"/>
            <InputFormEmail :preInputEmail="preInputEmail" v-model="contactEmail"/>
        </div>    
        <div>
             <InputFormPhone :preInputEmail="preInputPhone" v-model="contactPhone"/>
             <InputCheckbox v-model="isWhatsApp"/>
        </div>
        <div>
            <CommonButton @click="updateContact">Update</CommonButton>
            <CommonButton @click="deleteContact">Delete</CommonButton>
        </div>
    </div>
</template>

<script>
    import InputFormName from '@/views/input-form-name.vue'
    import InputFormEmail from '@/views/input-form-email.vue'
    import InputFormPhone from '@/views/input-form-phone.vue';
    import InputCheckbox from '@/components/inputs/input-checkbox.vue';
    import CommonButton from '@/components/buttons/common-button.vue'
    import ContactService from '@/services/api-services/contact-service.js'

    export default {

        data() {
            return {
                contact: {},
                isWhatsApp: false,
                preInputName: "",
                preInputEmail: "",
                preInputPhone: "",
                contactName: "",
                contactEmail: "",
                contactPhone: "",
            }
        },

        components: {
            InputFormName,
            InputFormEmail,
            InputFormPhone,
            InputCheckbox,
            CommonButton
        },

        mounted() {
            this.loadContactData(this.$route.params.id);
        },

        methods: {
            loadContactData: function (id) {
                let self = this;
                ContactService.getContact(id)
                    .then(function (response) {
                        self.contact = response.data
                        self.contactName = response.data.name;
                        self.contactEmail = response.data.email.emailAddress;
                        self.contactPhone = response.data.phone.number;
                        self.isWhatsApp = response.data.phone.isWhatsApp;
                });
            },
            
            updateContact: function() {
                this.contact.name = this.contactName;
                this.contact.email.emailAddress = this.contactEmail;
                this.contact.phone.number = this.contactPhone;
                this.contact.phone.isWhatsApp = this.isWhatsApp;

                ContactService.updateContact(this.contact);
            },

            deleteContact: function () {
                ContactService.deleteContact(this.contact);
                this.$router.push('/')
            }
        }
    };
</script>

<style scoped>
</style>