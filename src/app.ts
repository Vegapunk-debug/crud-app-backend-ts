import { log } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";  

dotenv.config();

interface AppInterface{
    startServer(): void;
    connectDatabase(): void;
    intializeRoutes(): void;
}

export class App implements AppInterface {
    PORT: number;
    app: express.Application;

    constructor(){
        this.PORT = 4000;
        this.app = express();
        this.app.use(express.json());

        this.startServer();
        this.connectDatabase();
        this.intializeRoutes();
    }

    startServer(): void{
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on http://localhost:${this.PORT}`);
        })
    }

    async connectDatabase(){
        try {
            const mongoURI = process.env.MONGO_URI || "";
            if (!mongoURI) {
                console.log("MongoURI is missing!");
                return 
            }

            await mongoose.connect(mongoURI)
            console.log("MongoDB Connected Successfully");
        } catch (error) {
            console.log("Error Connecting MongoDB", error);
            
        }
    }

    intializeRoutes(): void {
        console.log("Routes");
    }
}