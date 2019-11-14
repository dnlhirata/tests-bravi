<template>
    <div class="spaced">
        <b-card bg-variant="light">
            <b-form-group
                label-cols-lg="1"
                label="Phone Info"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0">
                <FormPhoneFields v-for="(phone, index) in phones" :phone="phone" :key="index"  @deletePhone="deletePhone"></FormPhoneFields>
            </b-form-group>
        <b-button size="sm" variant="success" @click="addPhoneLine">Add phone</b-button>
        </b-card>
    </div>
</template>

<script>

    import FormPhoneFields from '@/components/forms/form-phone-fields'

    export default {

        components: {
            FormPhoneFields
        },
    
        props: ['phones'],
        
        data() {
            return {
                phone: ""
            }
        },

        methods: {
            deletePhone: function (phone) {
                if (phone.id == null) {
                    this.phones.pop();
                    return;
                }
                this.$emit("deletePhone", phone);
            },
            
            addPhoneLine: function () {
                this.phones.push(
                {
                    number: null,
                    type: null,
                    isWhatsApp: null,
                    isPrimary: null
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "base.less";
</style>