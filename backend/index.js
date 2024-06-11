import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./dbConnection.js";
import { Router } from "express";
import routes from "./routes.js";

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

const PORT = process.env.PORT || 3000;

dotenv.config({
    path: './.env'
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
connectDB();

// Routes
const router = Router();
app.use("/api", routes);
