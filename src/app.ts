import express from "express";
import mongoose from "mongoose";

interface AppInterface{
    startServer(): void;
}

export class App implements AppInterface {
    PORT: number;
    app: express.Application;

    constructor(){
        this.PORT = 4000;
        this.app = express();
        this.startServer();
    }

    startServer(): void{
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on http://localhost:${this.PORT}`);
        })
    }
}