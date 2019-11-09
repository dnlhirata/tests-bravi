import httpRequest from '@/services/httpRequest-service.js';

class ContactService {
    addNewContact(name) {
        return httpRequest.axios.post('/Adicionar',
            {
                name: name
    }
        );
    }

    getAllContacts() {
        return httpRequest.axios.get('/GetAllContacts');
    }
}

export default new ContactService();