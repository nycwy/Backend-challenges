import mongoose from "mongoose";
import { Book } from "../models/Book.js";

//Create
const createBook = async (req, res) => {
    try {
        const { title, author, genre } = req.body;
        if (!title || !author || !genre) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newBook = new Book({ title, author, genre });
        await newBook.save();
        res.status(201).json({ message: "Book created successfully", book: newBook });

    } catch (error) {
        console.log("Error creating book: ", error);
        res.status(500).json({ message: "Server Error" });
    }
};

//Read All
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});

        res.status(200).json({
            count: books.length,
            data: books
        });

    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

//Read by ID
const getBookById = async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json(book);

    } catch (error) {
        console.error("Error fetching book:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

//Update
const updateBookName = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such book" });
    }

    try {
        const book = await Book.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        )

        if (!book) {
            return res.status(404).json({ error: "No such book" });
        }

        res.status(200).json(book);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//Delete
const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such book" });
    }

    try {
        const book = await Book.findOneAndDelete({ _id: id });

        if (!book) {
            return res.status(404).json({ error: "No such book" });
        }
        res.status(200).json({ message: "Book deleted successfully", book });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export { createBook, getAllBooks, getBookById, updateBookName, deleteBook };