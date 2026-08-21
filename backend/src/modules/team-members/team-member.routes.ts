import { Router } from "express";
import {
      createTeamMember,
      getTeamMember,
      getTeamMemberBySlug,
      listTeamMembers,
      removeTeamMember,
      updateTeamMember,
} from "./team-member.controllers";

const router = Router();

router.post("/", createTeamMember);
router.get("/", listTeamMembers);
router.get("/slug/:slug", getTeamMemberBySlug);
router.get("/:id", getTeamMember);
router.patch("/:id", updateTeamMember);
router.delete("/:id", removeTeamMember);

export default router;
