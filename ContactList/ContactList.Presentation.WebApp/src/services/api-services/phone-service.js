import httpRequest from '@/services/httpRequest-service.js';

class PhoneService {

    deletePhone(phone) {
        return httpRequest.axios.delete('/DeletePhone', { data: phone });
    }
}

export default new PhoneService();