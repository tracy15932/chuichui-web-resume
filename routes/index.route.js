const express = require('express');
const router = express.Router();
const HomeAction = require('../actions/home.action');

/* GET home page. */
router.get('/', function (req, res, next) {


    const contact_info = HomeAction.findContactInfo();
    const about_info = HomeAction.findAboutMeInfo();
    res.render('index/root.ejs',

        {
            title: 'Binny Web Resume',
            contact_info,
            about_info
        }
    );
});

module.exports = router;
