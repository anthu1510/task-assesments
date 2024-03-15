import http from "http"
import app from "./app"
import env from './configs/env'

const port = env.PORT;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server started on http://localhost:${port}`)
})