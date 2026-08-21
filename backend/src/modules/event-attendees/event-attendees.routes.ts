import { Router } from "express";
import {
      createEventAttendee,
      listEventAttendees,
      getEventAttendee,
      updateEventAttendee,
      deleteEventAttendee,
} from "./event-attendees.controllers";
import { validateParams } from "../../middleware/validateParams";
import { validateQuery } from "../../middleware/validateQuery";

const router = Router();

router.post("/", createEventAttendee);
router.get("/", validateQuery("page", "limit"), listEventAttendees);
router.get("/:id", validateParams("id"), getEventAttendee);
router.patch("/:id", validateParams("id"), updateEventAttendee);
router.delete("/:id", validateParams("id"), deleteEventAttendee);

export default router;
