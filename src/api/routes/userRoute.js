module.exports = (server) => {
    const userController = require("../controllers/userController");

    server.get("/user/list", userController.getUsers)
    .post("/user/register", userController.userRegister)
    .post("/user/login", userController.loginRegister)
    .patch("/user/update_role/:user_id", userController.setUserRole);
}