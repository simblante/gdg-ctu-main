import { Router } from "express";
import {
      createMedia,
      getMedia,
      listMedia,
      removeMedia,
      updateMedia,
} from "./media.controllers";

const router = Router();

router.post("/", createMedia);
router.get("/", listMedia);
router.get("/:id", getMedia);
router.patch("/:id", updateMedia);
router.delete("/:id", removeMedia);

export default router;
