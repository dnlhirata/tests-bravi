<template>
    <div class="home">
        <h1>TITLE</h1>
        <ul>
            <li v-for="contact of contacts" v-bind:key="contact.id">
                <a v-on:click="showContact(contact.id)">{{ contact.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import ContactService from '@/services/api-services/contact-service.js';

    export default {

        data: function() {
            return {
                contacts: [],
                addedId: ""
            }            
        },

        created: function() {
            ContactService.getAllContacts()
                .then(response => this.contacts = response.data);
        },

        methods: {
            showContact: function (id) {
                this.$router.push('contact/' + id)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

