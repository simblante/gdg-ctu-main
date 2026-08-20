import { Router } from "express";
import {
      addEventSpeaker,
      listEventsForTeamMember,
      listSpeakersForEvent,
      removeEventSpeaker,
      updateEventSpeaker,
} from "./event-speaker.controllers";

const router = Router();

router.post("/events/:eventId/speakers", addEventSpeaker);
router.get("/events/:eventId/speakers", listSpeakersForEvent);
router.patch(
      "/events/:eventId/speakers/:teamMemberId",
      updateEventSpeaker,
);
router.delete(
      "/events/:eventId/speakers/:teamMemberId",
      removeEventSpeaker,
);
router.get("/team-members/:teamMemberId/events", listEventsForTeamMember);

export default router;
