import { Router } from "express";
import {
  createCat,
  deleteCat,
  getAllCats,
  getCat,
  patchCat,
  putCat,
} from "./cats.service";

const router = Router();

router.get("/cats", getAllCats);
router.get("/cats/:id", getCat);
router.post("/cats", createCat);
router.put("/cats/:id", putCat);
router.patch("/cats/:id", patchCat);
router.delete("/cats/:id", deleteCat);

export default router;
