<template>
    <div class="spaced">
        <b-card bg-variant="light">
            <b-form-group
                label-cols-lg="1"
                label="Phone Info"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0">
                <FormPhoneFields v-for="(phone, index) in phones" :phone="phone" :key="index" @deletePhone="deletePhone"></FormPhoneFields>
            </b-form-group>
        <b-button v-if="$route.params.id" class="mb-2 mr-sm-2 mb-sm-0" size="sm" variant="info" @click="finished">Done</b-button>
        <b-button class="mb-2 mr-sm-2 mb-sm-0" size="sm" variant="success" @click="addPhoneLine">Add phone</b-button>
        </b-card>
    </div>
</template>

<script>

    import FormPhoneFields from '@/components/forms/form-phone-fields'

    export default {

        components: {
            FormPhoneFields
        },
    
        props: ['phones', 'personId'],
        
        data() {
            return {
                phone: "",
            }
        },

        created() {
            if (this.phones.length == 0) {
                this.addPhoneLine();
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
                    isWhatsApp: false,
                    isPrimary: false,
                    personId: this.personId
                })
            },

            finished: function () {
                this.$emit('finished')
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "base.less";
</style>