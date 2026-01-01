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