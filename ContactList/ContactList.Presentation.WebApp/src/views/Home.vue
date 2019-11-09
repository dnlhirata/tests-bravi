<template>
    <div class="home">
        <h1>{{ title }}</h1>
        <ul>
            <!--<li v-for="contact of contacts">
                <p>{{ contact.name }}</p>
            </li>-->
        </ul>
    </div>
</template>

<script>
    import ContactService from '@/services/api-services/contact-service.js';

    export default {
        name: 'Home',
        props: {
            title: String
        },

        data() {
            return {
                contacts: []
            }            
        },

        created() {            
            ContactService.addNewContact(this, 'Daniel', null, null);
                
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

