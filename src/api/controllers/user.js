import UserService from "../services/user";

class UserController {
    static async getUserById(req, res) {
        const requestObj = {
            id: req.params.id
        }
        const response = await UserService.getUserById(requestObj);
        return res.send(response);
    }
}

export default UserController;
