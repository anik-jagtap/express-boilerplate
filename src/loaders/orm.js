import { Sequelize } from 'sequelize';

// NOTE: This can be moved to environment variables
const DB_HOST_URL = 'mysql://anik:anik@127.0.0.1:3306/mydb';

const sequelize = new Sequelize(DB_HOST_URL,
    {
        // logging: logger.debug.bind(logger)
    });

(async () => {
    try {
        await sequelize.authenticate();

        console.log("info", "Connection has been established successfully.", "ORM");
    } catch (error) {
        console.log("error", "Unable to connect to the database:", "ORM", error)
    }
})();

export default sequelize;