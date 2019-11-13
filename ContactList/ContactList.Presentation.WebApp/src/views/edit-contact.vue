<template>
    <div class="center">
        <FormAddPhone :phones="phones" @deletePhone="deletePhone"></FormAddPhone>
    </div>
</template>

<script>

    import FormAddPhone from '@/components/forms/form-phone.vue'
    import ContactService from '@/services/api-services/contact-service.js';
    import PhoneService from '@/services/api-services/phone-service.js';
    
    export default {

        components: {
            FormAddPhone
        },

        data() {
            return {
                phones: [],
                phone: {}
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
                        self.phones = response.data.phones
                    });
            },
            
            deletePhone: function (phone) {
                PhoneService.deletePhone(phone);
            }
        }
    }
</script>

<style scoped>
</style>