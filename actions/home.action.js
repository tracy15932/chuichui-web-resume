class HomeAction {
    static findContactInfo() {
        return require('../data/contact');
    }

    static findAboutMeInfo() {
        return require('../data/about');
    }

    static findResumeInfo() {
        return require('../data/resume');
    }
}

module.exports = HomeAction;