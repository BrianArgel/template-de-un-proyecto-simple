import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
);

router.get("/", [
  authJwt.verifyToken,
  authJwt.isAdmin,
], usersCtrl.getUsers);

router.get("/id", [
  authJwt.verifyToken,
], usersCtrl.getUser)

router.get("/id/:username/:code", [
  authJwt.verifyToken,
], usersCtrl.getUserParams)

router.get("/myuser", [
  authJwt.verifyToken,
], usersCtrl.getMyUser)

export default router;
