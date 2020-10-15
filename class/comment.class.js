const dbConn = require('../services/mongo.conn');


class CWComment {
    constructor(comment_id) {
        this.comment_id = comment_id;
        this.db = CWComment.configDB();
    }

    async insertComment(title, subtitle, content, img) {
        return await this.db.insert({title, subtitle, content, img});

    }

    static async findCommentListWithBlog(offset = 0, blog_id) {
        const db = this.configDB();
        return await db.find({blog_id}).skip(offset).limit(30);
    }

    static configDB() {
        return dbConn.getDB().collection('Comment');
    }

}


module.exports = CWComment;