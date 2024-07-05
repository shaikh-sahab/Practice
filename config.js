import dotenv from 'dotenv'

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, NODE_ENV } = process.env;

dotenv.config();

const configuration = {

    db: {

        host: DB_HOST,

        user: DB_USER,

        password: DB_PASSWORD,

        name: DB_NAME

    },

    nodeEnv: NODE_ENV || 'development'

}

export default configuration;