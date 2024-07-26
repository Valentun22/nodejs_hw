import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middiewares/auth.middleware";
import { commonMiddleware } from "../middiewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getList);

router.get("/me", authMiddleware.checkAccessToken, userController.getMe);

router.put(
  "/me",
  authMiddleware.checkAccessToken,
  commonMiddleware.isBodyValid(UserValidator.updateUser),
  userController.updateMe,
);

router.delete("/me", commonMiddleware.isIdValid, userController.deleteMe);

router.get(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.getById,
);

export const userRouter = router;
