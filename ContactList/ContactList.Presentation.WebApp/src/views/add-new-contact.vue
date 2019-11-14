<template>
    <div class="center">
        <b-alert v-if="success" variant="success" show>Contact successfully updated </b-alert>
        <b-alert v-if="failure" variant="danger" show>Error on updating contact</b-alert>
        <InputName class="contact-name" v-model="name"></InputName>
        <FormPhone :phones="phones"></FormPhone>
        <FormEmail :emails="emails"></FormEmail>
        <b-col class="row" sm="12">
            <b-col sm="6">
                <b-button block class="mb-2 mr-sm-2 mb-sm-0" size="sm" variant="success" @click="finished">Finish</b-button>
            </b-col>
            <b-col sm="6">
                <b-button block class="mb-2 mr-sm-2 mb-sm-0" size="sm" variant="danger" @click="cancel">Cancel</b-button>
            </b-col>
        </b-col>
        
    </div>
</template>

<script>

    import FormPhone from '@/components/forms/form-phone.vue'
    import FormEmail from '@/components/forms/form-email.vue'
    import InputName from '@/components/inputs/input-name.vue'
    import ContactService from '@/services/api-services/contact-service.js'
    
    export default {

        components: {
            FormPhone,
            FormEmail,
            InputName
        },

        data() {
            return {
                name: "",
                phones: [],
                phone: {},
                emails: [],
                email: {},
                success: false,
                failure: false
            }
        },

        methods: {            
            cancel: function () {
                this.$router.push({
                    name: 'Home'
                })
            },

            finished: function () {
                let self = this;
                ContactService.addNewContact(this.name, this.phones, this.emails)
                    .then(self.$router.push({
                        name: 'Home'
                    }));
            }
            
            
        }
    }
</script>

<style lang="less" scoped>
@import "../styles/colors.less";

.pageWidth {
    width: 1256px;
}

.center {
  margin: auto;
  padding: 10px;
}

.header-text {
  font-size: 22px;
}

.error-message {
  margin-top: 10px;
  color: @ColorError;
  font-size: 16px;
}
</style>