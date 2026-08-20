import { Router } from "express";
import adminRoutes from "./admins/admin.routes";
import eventSpeakerRoutes from "./event-speakers/event-speaker.routes";
import eventRoutes from "./events/event.routes";
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

export default router;
