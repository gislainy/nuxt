import { index } from "../controllers/index";

export default async (router) => {
    router.get('/', index);
}
