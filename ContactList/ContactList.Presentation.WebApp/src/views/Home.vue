<template>
    <div class="home">
        <table align="center">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Is WhatsApp?</th>
                <th>Delete?</th>
            </tr>
            <tbody>
                <tr v-for="contact of contacts" v-bind:key="contact.id">
                    <td>
                        <a v-on:click="showContact(contact.id)" href="#">{{ contact.name }}</a>
                    </td>
                    <td>{{ contact.email.emailAddress }}</td>
                    <td>{{ contact.phone.number }}</td>
                    <td>{{ contact.phone.isWhatsApp }}</td>
                    <td align="center"><button><img class="icon-small" src="/images/delete-icon.png" v-on:click="deleteContact(contact.id)" /></button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ContactService from "@/services/api-services/contact-service.js";
    import InputImage from "@/components/inputs/input-image.vue";

    export default {

        components: {
            InputImage
        },

        data: function () {
            return {
                contacts: [],
            };
        },

        created: function () {
            ContactService.getAllContacts().then(
                response => (this.contacts = response.data)
            );
        },

        methods: {
            showContact: function (id) {
                this.$router.push({
                    name: "UpdateContact",
                    params: {
                        id: id
                    }
                });
            },
        
            deleteContact: function (id) {
                ContactService.getContact(id).
                    then(function (response) {
                        let contact = response.data;
                        ContactService.deleteContact(contact)
                            .then(location.reload())
                    })
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .icon-small{
        width: 16px;
        height: 16px;
    }    

    body {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 14px;
        color: #444;
    }

    table {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: #fff;
        margin-top: 20px;
        width: 1256px;
    }

    th {
        background-color: #42b983;
        color: rgba(255, 255, 255, 0.66);
    }

    td {
        background-color: #f9f9f9;
    }

    th,
    td {
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

