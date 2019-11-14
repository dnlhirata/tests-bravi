import httpRequest from '@/services/httpRequest-service.js';

class EmailService {

    deleteEmail(email) {
        return httpRequest.axios.delete('/DeleteEmail', { data: email });
    }
}

export default new EmailService();