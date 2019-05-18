//Application controller
import '@babel/polyfill'


import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { $, plugins, controllers } from "@dekproject/scope";
import routes from "@dekproject/routes";

const app = express()

$.set("app", app);
(async () => {
    dotenv.config(); //Load .env
    
    $.app.use(bodyParser.urlencoded({ extended: false }));
    $.app.use(bodyParser.json());

    await plugins(process.env.PLUGIN_PATH || "api/src/plugins");

    
    $.wait("mongoose").then(async () => {
        $.app.use('/', await routes(process.env.ROUTES_PATH || "api/src/routes"))
        
        // const PORT = process.env.PORT || 3000;
        // $.app.listen(PORT, () => {
        //     console.log(`App listening on port ${PORT}!`);
        // });
    });
})();

// export the server middleware
module.exports = {
    path: '/api',
    handler: app
}
