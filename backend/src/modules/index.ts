import { Router } from "express";
import adminRoutes from "./admins/admin.routes";
import eventHostRoutes from "./event-hosts/event-hosts.routes";
import eventAttendeeRoutes from "./event-attendees/event-attendees.routes";
import eventRoutes from "./events/event.routes";
import eventSpeakerRoutes from "./event-speakers/event-speaker.routes";
import mediaRoutes from "./media/media.routes";
import siteContentRoutes from "./site-content/site-content.routes";
import teamMemberRoutes from "./team-members/team-member.routes";

const router = Router();

router.use("/admins", adminRoutes);
router.use("/team-members", teamMemberRoutes);
router.use("/events", eventRoutes);
router.use("/media", mediaRoutes);
router.use("/site-content", siteContentRoutes);
router.use("/event-speakers", eventSpeakerRoutes);
router.use("/event-hosts", eventHostRoutes);
router.use("/event-attendees", eventAttendeeRoutes);

export default router;
