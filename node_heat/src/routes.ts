import { Router } from "express";
import { resourceLimits } from "worker_threads";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLast3MessagesController } from "./controller/GetLast3MessagesController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { ProfileUserService } from "./services/ProfileUserService";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle);

export { router };
