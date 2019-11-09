<template>
    <div class="home">
        <h1>TITLE</h1>
        <a v-on:click="addNewContact">Adicionar novo contato</a>
        <ul>
            <li v-for="contact of contacts" v-bind:key="contact.id">
                <p>{{ contact.name }}</p>
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
            addNewContact: function () {
                this.$router.push('/adicionar-novo-contato')
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

