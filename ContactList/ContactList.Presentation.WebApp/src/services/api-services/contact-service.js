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

    getContact(id) {
        return httpRequest.axios.get('Contact/' + id);
    }

    getAllContacts() {
        return httpRequest.axios.get('/GetAllContacts');
    }
}

export default new ContactService();