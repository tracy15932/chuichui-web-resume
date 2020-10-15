class HomeAction {


    static findContactInfo() {
        const contact_info = require('../data/contact');
        return contact_info || {
            "name": "Bai Chi",
            "email": "baichi950217@gmail.com",
            "location": "Chino Hills, CA",
            "phone": "+1 626 417 8309",
            "address": "55223 Avata Blvd",
            "job_title": "House Wife",
            "age": "99"
        }
    }
}

module.exports = HomeAction;