import { createUser, getAllUsers, getOneUser, updateUser, deleteUser, getByIdUser } from "../controllers/users";

export default async (router) => {
    router.route('/users')
        .post(createUser)
        .get(getAllUsers);

    router.route('/users/:userId')
        .get(getOneUser)
        .put(updateUser)
        .delete(deleteUser);

    router.param('userId', getByIdUser);
}
