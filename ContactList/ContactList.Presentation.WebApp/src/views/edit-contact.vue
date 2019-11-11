<template>
    <div>
        <h4 class="header-text">Fill in the details to add a new contact</h4>
        <div>
            <InputFormName :preInputName="preInputName" v-model="contactName"/>
        </div>    
        <div>
            <InputFormEmail :preInputEmail="preInputEmail" v-model="contactEmail"/>
            <InputFormPhone :preInputEmail="preInputPhone" v-model="contactPhone"/>
            <InputCheckbox v-model="isWhatsApp">The phone number is a WhatsApp number?</InputCheckbox>
        </div>
        <div>
            <UpdateButton @click="updateContact">Update</UpdateButton>
            <DeleteButton @click="deleteContact">Delete</DeleteButton>
        </div>
    </div>
</template>

<script>
    import InputFormName from '@/views/input-form-name.vue'
    import InputFormEmail from '@/views/input-form-email.vue'
    import InputFormPhone from '@/views/input-form-phone.vue';
    import InputCheckbox from '@/components/inputs/input-checkbox.vue';
    import UpdateButton from '@/components/buttons/confirm-button.vue'
    import DeleteButton from '@/components/buttons/delete-button.vue'
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
            UpdateButton,
            DeleteButton
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
                let self = this;
                self.contact.name = self.contactName;
                self.contact.email.emailAddress = self.contactEmail;
                this.contact.phone.number = this.contactPhone;
                this.contact.phone.isWhatsApp = this.isWhatsApp;

                
                ContactService.updateContact(this.contact)
                    .then(function () {
                        self.$router.push('/');
                        location.reload();
                    });
            },

            deleteContact: function () {
                let self = this;
                ContactService.deleteContact(this.contact)
                    .then(function () {
                        self.$router.push('/');
                        location.reload();
                    });
                
            }
        }
    };
</script>

<style scoped>
</style>