import express from "express"
import { createBook, getAllBooks, getBookById, updateBookName, deleteBook } from "../controllers/bookController.js"

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.patch("/:id", updateBookName);
router.delete("/:id", deleteBook);

export default router;