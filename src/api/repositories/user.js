import User from "../models/user";

let _instance = null;
let _singleton = true;

const getInstance = () => {
    if (!_instance) {
        _singleton = false;
        _instance = new UserRepository();
        _singleton = true;
    }
    return _instance;
}

class UserRepository {
    constructor() {
        if (_singleton) {
            throw ("UserRepository is a singleton class, please use UserRepository import as an object.");
        }
    }

    async getUserById(id) {
        return await User.findOne({ where: { Id: id }, raw: true });
    }
}

const UserRepositoryInstance = getInstance();

export default UserRepositoryInstance;