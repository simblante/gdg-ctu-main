import { Router } from "express";
import {
      createEvent,
      getEvent,
      getEventBySlug,
      listEvents,
      removeEvent,
      updateEvent,
} from "./event.controllers";

const router = Router();

router.post("/", createEvent);
router.get("/", listEvents);
router.get("/slug/:slug", getEventBySlug);
router.get("/:id", getEvent);
router.patch("/:id", updateEvent);
router.delete("/:id", removeEvent);

export default router;
