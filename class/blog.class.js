const dbConn = require('../services/mongo.conn');
const ObjectID = require('mongodb').ObjectID;


class CWBlog {
    constructor(blog_id) {
        this.blog_id = blog_id;
        this.db = CWBlog.configDB();

    }

    async findBlogDetail() {
        return new Promise((resolve, reject) => {
            this.db.findOne({_id: ObjectID(this.blog_id)}, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });

    }

    async insertBlog(title, subtitle, content, img) {
        return new Promise((resolve, reject) => {
            this.db.insert({title, subtitle, content, img}, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static async findBlogList(offset = 0) {
        const db = this.configDB();
        return new Promise((resolve, reject) => {
            db.find({}).skip(offset).limit(30).toArray((err, result) => {
                console.log(result);
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static configDB() {
        return dbConn.getDB().collection('Blog');
    }

}


module.exports = CWBlog;