const dbConn = require('../services/mongo.conn');
const ObjectID = require('mongodb').ObjectID;

class CWComment {
    constructor(comment_id) {
        this.comment_id = comment_id;
        this.db = CWComment.configDB();
    }

    async insertComment(author, content, blog_id) {
        const img = `https://picsum.photos/id/${Math.round(Math.random() * 50)}/140`;
        return new Promise((resolve, reject) => {
            this.db.insertOne({
                author,
                content,
                blog_id,
                status: 1,
                cdate: new Date(),
                udate: new Date(),
                img
            }, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static async findCommentListWithBlog(offset = 0, blog_id) {
        const db = this.configDB();
        return new Promise((resolve, reject) => {
            db.find({blog_id, status: 1}).skip(offset).limit(30).toArray((err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static configDB() {
        return dbConn.getDB().collection('Comment');
    }

}


module.exports = CWComment;