import http from "http";
import https from "https";

function server(spec) {
    const host = spec.host;
    const port = spec.port;

    // initialise http server
    const http_server = (
        spec.https === true
        ? https.createServer()
        : http.createServer()
    );


    function request_handler(ignore, response) {
        response.end("hello http server!");
    }

    // register request listener
    http_server.on("request", request_handler);

    function start(callback, value) {
        http_server.listen({host, port}, function (error) {
            if (callback) {
                if (error) {
                    callback(undefined, error);
                    return;
                }

                callback();
                return;
            }

            if (error) {
                throw error;
            }
        });
    }

    return Object.freeze({
        start
    });
}

export default Object.freeze({
    create: server
});