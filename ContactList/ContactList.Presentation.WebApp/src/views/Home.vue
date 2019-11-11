<template>
    <div class="home">
        <h1>Contact List</h1>
        <table>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Is WhatsApp?</th>
            </thead>
            <tbody>
                <tr v-for="contact of contacts" v-bind:key="contact.id">
                    <td><a v-on:click="showContact(contact.id)" href="#">{{ contact.name }}</a></td>
                    <td>{{ contact.email.emailAddress }}</td>
                    <td>{{ contact.phone.number }}</td>
                    <td>{{ contact.phone.isWhatsApp }}</td>
                </tr>
            </tbody>
        </table>
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
    body {
      font-family: Helvetica Neue, Arial, sans-serif;
      font-size: 14px;
      color: #444;
    }

    table {
      border: 2px solid #42b983;
      border-radius: 3px;
      background-color: #fff;
    }

    th {
      background-color: #42b983;
      color: rgba(255,255,255,0.66);
    }

    td {
      background-color: #f9f9f9;
    }

    th, td {
      min-width: 120px;
      padding: 10px 20px;
    }

    th.active {
      color: #fff;
    }

    th.active .arrow {
      opacity: 1;
    }

    .arrow {
      display: inline-block;
      vertical-align: middle;
      width: 0;
      height: 0;
      margin-left: 5px;
      opacity: 0.66;
    }

    .arrow.asc {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #fff;
    }
</style>

