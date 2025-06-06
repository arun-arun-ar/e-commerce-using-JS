import { dirname } from 'path';
// Load environment variables at the very beginning
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Import packages
import path from "path";
import express from 'express';
import cookieParser from "cookie-parser";
import cors from 'cors';


//importing uitls
// Import database connection
import connectDB from "./config/db.js";
//import user routes
import userRoutes from './routes/userRoutes.js'



// Set port
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

app.use(cookieParser()); // Move cookie-parser before CORS

// CORS configuration
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'], // Add your frontend URLs
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['Set-Cookie']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log(`Server is successfully running on port ${port}`);
});