import { Router } from "express";
const router = Router();

import {
  getUser,
  getUsers,
  createUser,
  deleteUser,
} from "../controllers/users.controller";

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser).delete(deleteUser);

export default router;
