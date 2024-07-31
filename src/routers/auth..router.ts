import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { authMiddleware } from "../middiewares/auth.middleware";
import { commonMiddleware } from "../middiewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.post(
  "/sign-up",
  commonMiddleware.isBodyValid(UserValidator.createUser),
  authController.signUp,
);

router.post(
  "/sign-in",
  commonMiddleware.isBodyValid(UserValidator.login),
  authController.signIn,
);

router.post(
  "/refresh",
  authMiddleware.checkRefreshToken,
  authController.refresh,
);

router.post("/logout", authMiddleware.checkAccessToken, authController.logout);
router.post(
  "/logout-all",
  authMiddleware.checkAccessToken,
  authController.logout,
);

export const authRouter = router;
