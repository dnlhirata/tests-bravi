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
                this.$emit("deletePhone", phone);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "base.less";
</style>