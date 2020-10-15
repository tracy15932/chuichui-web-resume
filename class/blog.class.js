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

    async insertBlog(title, subtitle, content, tags, cover_image, header_image) {
        return new Promise((resolve, reject) => {
            const img = cover_image || `https://picsum.photos/id/${Math.round(Math.random() * 300)}/400/250`;
            const header_img = header_image || 'https://picsum.photos/1920/900';
            this.db.insert({
                title,
                subtitle,
                content,
                tags,
                img,
                cdate: new Date(),
                udate: new Date(),
                header_img,
                status: 1
            }, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static async findBlogList(offset = 0) {
        const db = this.configDB();
        return new Promise((resolve, reject) => {
            db.find({status: 1}).skip(offset).limit(30).toArray((err, result) => {
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