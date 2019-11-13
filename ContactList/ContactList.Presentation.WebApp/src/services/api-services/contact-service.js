import httpRequest from '@/services/httpRequest-service.js';

class ContactService {
    addNewContact(name, phone, email) {
        return httpRequest.axios.post('/Adicionar',
            {
                name: name,
                phone: phone,
                email: email
            }
        );
    }

    updateContact(contact) {
        return httpRequest.axios.put('/UpdateContact', contact);
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