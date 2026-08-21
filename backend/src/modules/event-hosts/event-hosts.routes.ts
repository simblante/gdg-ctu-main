import { Router } from "express";
import {
      createEventHost,
      listEventHosts,
      getEventHost,
      updateEventHost,
      deleteEventHost,
} from "./event-hosts.controllers";
import { validateParams } from "../../middleware/validateParams";
import { validateQuery } from "../../middleware/validateQuery";

const router = Router();

router.post("/", createEventHost);
router.get("/", validateQuery("page", "limit"), listEventHosts);
router.get("/:id", validateParams("id"), getEventHost);
router.patch("/:id", validateParams("id"), updateEventHost);
router.delete("/:id", validateParams("id"), deleteEventHost);

export default router;
