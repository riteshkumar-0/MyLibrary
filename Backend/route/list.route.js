import express from "express";
import {
    createList,
    addBookToList,
    getBooksFromList,
    deleteBookFromList,
    fetchLists
} from "../controller/list.controller.js"

const router = express.Router();

router.get("/", fetchLists);
router.post("/", createList);
router.post("/:listId/book", addBookToList);
router.get("/:listId/books", getBooksFromList);
router.delete("/:listId/book/:bookId", deleteBookFromList);

export default router;