import { cleanEnv, str, port } from "envalid";


export default cleanEnv(process.env, {
    NODE_ENV: str({ choices: ['dev', 'test', 'prod', 'stag'] }),
    PORT: port(),
    DATABASE_URL: str(),
    ACCESS_TOKEN_EXPIRE_TIME: str(),
    REFRESH_TOKEN_EXPIRE_TIME: str(),
    ACCESS_TOKEN_SECRET: str(),
    REFRESH_TOKEN_SECRET: str()
});