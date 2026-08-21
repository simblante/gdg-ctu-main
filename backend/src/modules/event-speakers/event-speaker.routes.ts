import { Router } from "express";
import {
      createEventSpeaker,
      getEventSpeaker,
      getEventSpeakerBySlug,
      listEventSpeakers,
      listEventSpeakersForTeamMember,
      removeEventSpeaker,
      updateEventSpeaker,
} from "./event-speaker.controllers";

const router = Router();

router.post("/", createEventSpeaker);
router.get("/", listEventSpeakers);
router.get("/slug/:slug", getEventSpeakerBySlug);
router.get("/:id", getEventSpeaker);
router.patch("/:id", updateEventSpeaker);
router.delete("/:id", removeEventSpeaker);
router.get(
      "/team-members/:teamMemberId/event-speakers",
      listEventSpeakersForTeamMember,
);

export default router;
