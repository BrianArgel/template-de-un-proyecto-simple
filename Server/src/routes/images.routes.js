import { Router } from "express";
const router = Router();

import * as imagesCtrl from "../controllers/images.controller";

router.get(
  "/users/:img",
  imagesCtrl.viewImgUser
);

export default router;