class ContactService {
    addNewContact(client, name, phones, emails) {
        client.$http.post('https://localhost:44314/contact-list/adicionar',
            {
                name: name,
                phones: phones,
                emails: emails
            });
    }

    getAllContacts(client) {
        return client.$http.get('https://localhost:44314/contact-list');
    }
}

export default new ContactService();