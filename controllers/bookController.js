import { Book } from "../models/Book.js";

export const createBook = async (req, res) => {
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

export const getAllBooks = async (req, res) => {
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

export const getBookById = async (req, res) => {
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