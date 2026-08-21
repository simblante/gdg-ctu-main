import { Router } from "express";
import {
      createSiteContent,
      getSiteContent,
      getSiteContentBySectionKey,
      listSiteContent,
      removeSiteContent,
      updateSiteContent,
} from "./site-content.controllers";

const router = Router();

router.post("/", createSiteContent);
router.get("/", listSiteContent);
router.get("/section/:sectionKey", getSiteContentBySectionKey);
router.get("/:id", getSiteContent);
router.patch("/:id", updateSiteContent);
router.delete("/:id", removeSiteContent);

export default router;
