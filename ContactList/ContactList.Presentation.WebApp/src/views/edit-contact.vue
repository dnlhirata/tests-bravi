<template>
    <div class="center">
        <FormAddPhone :phones="phones"></FormAddPhone>
    </div>
</template>

<script>

    import FormAddPhone from '@/components/forms/form-phone.vue'
    import ContactService from '@/services/api-services/contact-service.js';
    
    export default {

        components: {
            FormAddPhone
        },

        data() {
            return {
                phones: []
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
            }
        }
    }
</script>

<style scoped>
</style>