import { Router } from "express";
import controller from "../controllers/index.js";

const router = Router();

router.post("/rooms", controller.rooms.create);
router.get("/rooms/:id", controller.rooms.getById);
router.get("/users/:userId/rooms", controller.rooms.getAllByUserId);
router.put("/rooms/:id", controller.rooms.update);
router.delete("/rooms/:id", controller.rooms.delete);
router.post("/rooms/:id/members", controller.rooms.addMember);
router.delete("/rooms/:id/members/:uid", controller.rooms.delete);

export default router;
