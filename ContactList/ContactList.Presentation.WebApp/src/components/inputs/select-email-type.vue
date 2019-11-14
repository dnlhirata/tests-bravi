<template>
    <div>
        <label class="sr-only" for="inline-form-input-type">Type</label>
        <b-form-select class="mb-2 mr-sm-2 mb-sm-0" id="inline-form-input-type" v-model="option" :options="emailTypes" @change="onChange"></b-form-select>
    </div>
</template>

<script>

    export default {

        props: ['selected'],

        data() {
            return {
                emailTypes: [
                    { text: 'Personal', value: 'personal' },
                    { text: 'Work', value: 'work' },
                ],
                option: this.selected
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