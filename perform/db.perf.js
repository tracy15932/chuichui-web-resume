const dotenv = require('dotenv');
dotenv.config();
const {connectToServer, getDB} = require('../services/mongo.conn');

const CWBlog = require('../class/blog.class');

connectToServer((err) => {
    if (!err) console.log('MongoDB Connected.');

    // const db = getDB();

    db.createCollection('Blog',
        {
            capped: false,
            autoIndexId: true,
        }, (err, result) => {
            if (err) console.log(err);
            console.log(result);
        }
    );

    db.createCollection('Comment', {
        capped: false,
        autoIndexId: true,
    }, (err, result) => {
        if (err) console.log(err);
        console.log(result);
    });

    // console.log(db);
    // const blog = new CWBlog();
    // blog
    //     .insertBlog('Hello World', 'This is my first mongo blog', 'im really happy to have this img', 'https://picsum.photos/200/300')
    //     .then(inr => {
    //         console.log(inr);
    //     })
    //     .then(() => {
    //         const blog_list = CWBlog.findBlogList();
    //         console.log(blog_list)
    //     });


});


// const main = (() => {
//
//     //SETTING UP MONGODB TABLES HERE.
//
//
// })();