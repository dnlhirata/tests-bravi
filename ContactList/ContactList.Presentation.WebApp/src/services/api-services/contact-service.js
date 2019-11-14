import httpRequest from '@/services/httpRequest-service.js';

class ContactService {
    addNewContact(name, phones, emails) {
        return httpRequest.axios.post('/Adicionar',
            {
                name: name,
                phones: phones,
                emails: emails
            }
        );
    }

    updateContact(contact) {
        return httpRequest.axios.put('/UpdateContact', contact );
    }

    getContact(id) {
        return httpRequest.axios.get('Contact/' + id);
    }

    getAllContacts() {
        return httpRequest.axios.get('/GetAllContacts');
    }

    deleteContact(contact) {
        return httpRequest.axios.delete('/DeleteContact', { data: contact });
    }
}

export default new ContactService();