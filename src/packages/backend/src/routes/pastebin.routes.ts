import { Router } from "express";
import PastebinController from "../controllers/pastebin.controller";

const router = Router();
const pastebinController = new PastebinController();

router.get("/", pastebinController.getBins);
router.get("/:id", pastebinController.getBin);
router.post("/", pastebinController.createBin);
router.put("/:id", pastebinController.editBin);
router.delete("/:id", pastebinController.deleteBin);

export default router;
