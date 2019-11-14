<template>
    <div class="center">
        <h3 class="contact-name">{{ name }}</h3>
        <FormPhone :phones="phones" @deletePhone="deletePhone"></FormPhone>
        <FormEmail :emails="emails" @deleteEmail="deleteEmail"></FormEmail>
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
                name: "",
                phones: [],
                phone: {},
                emails: {},
                email: {}
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
                        self.name = response.data.name;
                        self.phones = response.data.phones
                        self.emails = response.data.emails
                    });
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