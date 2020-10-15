class HomeAction {
    static findContactInfo() {
        return require('../data/contact');
    }

    static findAboutMeInfo(){
        return require('../data/about');
    }
}

module.exports = HomeAction;