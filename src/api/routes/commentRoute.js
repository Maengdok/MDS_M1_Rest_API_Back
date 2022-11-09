module.exports = (server) => {
    const commentController = require("../controllers/commentController");

server.route("/posts/:post_id/comments")
.get(commentController.listAllComments)
.post(commentController.createAComment);

server.route("/comments/:comment_id") // req.params.comment_id
.get(commentController.getAComment)
.put(commentController.updateAComment)
.delete(commentController.deleteAComment);
}