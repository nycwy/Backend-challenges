import express from "express";
import connectDB from "./config/db.js"
import bookRoutes from "./routes/bookRoutes.js"

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

connectDB();

app.use("/books", bookRoutes);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
