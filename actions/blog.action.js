const CWBlog = require('../class/blog.class');
const CWComment = require('../class/comment.class');

const moment = require('moment');

class BlogAction {

    static async findBlogList(offset) {
        const list = await CWBlog.findBlogList(offset);
        return list.map(blog => {
            return {...blog, cmonth: moment(blog.cdate).format('MMM'), cday: moment(blog.cdate).format('DD')};
        });
    }

    static async findBlogDetail(blog_id) {
        const blog = await new CWBlog(blog_id).findBlogDetail();
        return {...blog, cfulldate: moment(blog.cdate).format('DD MMMM, YYYY')};
    }

    static async findCommentListWithBlog(offset, blog_id) {
        const comments = await CWComment.findCommentListWithBlog(offset, blog_id);
        return comments.map(comment => {
            return {...comment, cfulldate: moment(comment.cdate).format('DD MMMM, YYYY')}
        });
    }

    static async registerCommentWithBlog(blog_id, author, content) {
        return await new CWComment().insertComment(author, content, blog_id);
    }
}

module.exports = BlogAction;