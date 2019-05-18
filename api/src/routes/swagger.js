import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

export default async (router) => {
    router.use('/docs', swaggerUi.serve);
    router.get('/docs', swaggerUi.setup(swaggerDocument));
}
