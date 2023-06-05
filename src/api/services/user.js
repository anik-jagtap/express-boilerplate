import UserRepository from "../repositories/user";

let _instance = null;
let _singleton = true;

const getInstance = () => {
    if (!_instance) {
        _singleton = false;
        _instance = new UserService();
        _singleton = true;
    }
    return _instance;
}

class UserService {
    constructor() {
        if (_singleton) {
            throw ("UserService is a singleton class, please use UserService import as an object.");
        }
    }

    async getUserById(params = {}) {
        try {
            const user = await UserRepository.getUserById(params.id);
            return {
                success: true,
                data: {
                    user
                }
            };
        } catch(error) {
            console.log(error);
            return {
                success: false,
                message: 'Error occured while finding the user, Please try again!'
            }
        }
    }
}

const UserServiceInstance = getInstance();

export default UserServiceInstance;
