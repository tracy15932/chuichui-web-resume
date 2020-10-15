

const dotenv = require('dotenv');
dotenv.config();
const {connectToServer, getDB} = require('../services/mongo.conn');

const CWBlog = require('../class/blog.class');

connectToServer((err) => {
    if (!err) console.log('MongoDB Connected.');

    // const db = getDB();

    // db.createCollection('Blog',
    //     {
    //         capped: false,
    //         autoIndexId: true,
    //     }, (err, result) => {
    //         if (err) console.log(err);
    //         console.log(result);
    //     }
    // );
    //
    // db.createCollection('Comment', {
    //     capped: false,
    //     autoIndexId: true,
    // }, (err, result) => {
    //     if (err) console.log(err);
    //     console.log(result);
    // });

    // console.log(db);
    const blog = new CWBlog();

    const content = `Now that the application has been created, we have to register it with the project so that it will be included when any tools are run (like adding models to the database for example). Applications are registered by adding them to the INSTALLED_APPS list in the project settings. 

Open the project settings file, django_projects/locallibrary/locallibrary/settings.py, and find the definition for the INSTALLED_APPS list. `
    blog
        .insertBlog('Deploying a Data Engineering Project with Django',
            'Web Development',
            content,
            ['Spark', 'Python', 'Django']
        )
        .then(inr => {
            console.log(inr);
        })
        .then(() => {
            const blog_list = CWBlog.findBlogList();
            console.log(blog_list)
        });


});


// const main = (() => {
//
//     //SETTING UP MONGODB TABLES HERE.
//
//
// })();