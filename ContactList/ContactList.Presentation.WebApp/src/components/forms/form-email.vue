<template>
    <div class="spaced">
        <b-card bg-variant="light">
            <b-form-group
                label-cols-lg="1"
                label="Email Info"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0">
                <FormEmailFields v-for="(email, index) in emails" :email="email" :key="index"  @deleteEmail="deleteEmail"></FormEmailFields>
            </b-form-group>
        <b-button size="sm" variant="success" @click="addEmailLine">Add email</b-button>
        </b-card>
    </div>
</template>

<script>

    import FormEmailFields from '@/components/forms/form-email-fields'

    export default {

        components: {
            FormEmailFields
        },
    
        props: ['emails'],
        
        data() {
            return {
                email: ""
            }
        },

        methods: {
            deleteEmail: function (email) {
                if (email.id == null) {
                    this.emails.pop();
                    return;
                }
                this.$emit("deleteEmail", email);
            },
            
            addEmailLine: function () {
                this.emails.push(
                {
                    emailAddress: null,
                    type: null,
                    isPrimary: null
                })
            }
        }
    }
</script>

<style scoped>
    @import "base.less";
</style>