const CWBlog = require('../class/blog.class');
const CWComment = require('../class/comment.class');

class BlogAction {

    static async findBlogList(offset) {
        return await CWBlog.findBlogList(offset);
    }

    static async findBlogDetail(blog_id) {
        return await new CWBlog(blog_id).findBlogDetail();
    }

    static async findCommentListWithBlog(offset, blog_id) {
        return await CWComment.findCommentListWithBlog(offset, blog_id);
    }
}

module.exports = BlogAction;