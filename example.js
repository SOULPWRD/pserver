import server from "./http_server.js";

const http_server = server.create({
    host: "localhost",
    port: 3000
});

http_server.start(function (ignore, error) {
    if (error) {
        throw error;
    }

    console.log("Server is running at http://localhost:3000")
});