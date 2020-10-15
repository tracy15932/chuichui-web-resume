const express = require('express');
const router = express.Router();
const HomeAction = require('../actions/home.action');

/* GET home page. */
router.get('/', function (req, res, next) {


    const contact_info = HomeAction.findContactInfo();
    res.render('index/root.ejs',

        {
            title: 'Binny Web Resume',
            contact_info
        }
    );
});

module.exports = router;
