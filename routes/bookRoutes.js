import express from "express"
import { createBook, getAllBooks, getBookById, updateBookName } from "../controllers/bookController.js"

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.patch("/:id", updateBookName);

export default router;