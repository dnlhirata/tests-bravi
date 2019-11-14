<template>
    <div class="center">
        <b-alert v-if="success" variant="success" show>Contact successfully updated </b-alert>
        <b-alert v-if="failure" variant="danger" show>Error on updating contact</b-alert>
        <h3 class="contact-name">{{ name }}</h3>
        <FormPhone :phones="phones" :personId="contact.id" @deletePhone="deletePhone"></FormPhone>
        <FormEmail :emails="emails" :personId="contact.id" @deleteEmail="deleteEmail" @finished="updateContact"></FormEmail>
    </div>
</template>

<script>

    import FormPhone from '@/components/forms/form-phone.vue'
    import FormEmail from '@/components/forms/form-email.vue'
    import ContactService from '@/services/api-services/contact-service.js';
    import PhoneService from '@/services/api-services/phone-service.js';
    import EmailService from '@/services/api-services/email-service.js';
    
    export default {

        components: {
            FormPhone,
            FormEmail
        },

        data() {
            return {
                contact: {},
                name: "",
                phones: [],
                phone: {},
                emails: {},
                email: {},
                success: false,
                failure: false,
            }
        },

        mounted() {
            this.loadContactData(this.$route.params.id)
        },

        methods: {
            loadContactData: function (id) {
                let self = this;
                ContactService.getContact(id)
                    .then(function (response) {
                        self.contact = response.data;
                        self.name = response.data.name;
                        self.phones = response.data.phones
                        self.emails = response.data.emails
                    });
            },
            
            cancelUpdate: function () {
                this.$router.push({
                    name: 'Home'
                });
            },

            updateContact: function () {
                let self = this;
                ContactService.updateContact(self.contact)
                    .then(self.success = true);
            },
            
            deletePhone: function (phone) {
                PhoneService.deletePhone(phone);
            },

            deleteEmail: function (email) {
                EmailService.deleteEmail(email);
            }
        }
    }
</script>

<style scoped>

    .contact-name {
        margin-top: 10px;
        text-align: center;
    }
</style>