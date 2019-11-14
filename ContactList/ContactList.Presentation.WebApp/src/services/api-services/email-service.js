import httpRequest from '@/services/httpRequest-service.js';

class EmailService {

    deleteEmail(email) {
        return httpRequest.axios.delete('/DeletEmail', { data: email });
    }
}

export default new EmailService();