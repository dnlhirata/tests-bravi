<template>
    <div>
        <label class="sr-only" for="inline-form-input-type">Type</label>
        <b-form-select class="mb-2 mr-sm-2 mb-sm-0" id="inline-form-input-type" v-model="option" :options="phoneTypes" @change="onChange"></b-form-select>
    </div>
</template>

<script>
    export default {

        props: ['selected'],

        data() {
            return {
                phoneTypes: [
                    { text: 'Home', value: 'home' },
                    { text: 'Work', value: 'work' },
                    { text: 'Mobile', value: 'mobile' },
                    { text: 'Fax', value: 'fax' }
                ],
                number: "",
                phoneType: "",
                isWpp: false,
                isPrimary: false,
                option: this.selected,
                message: "",
            }
        },

        methods: {
            onChange: function (value) {
                this.$emit('selected', value)
            }
        }

    }
</script>

<style scoped>
</style>