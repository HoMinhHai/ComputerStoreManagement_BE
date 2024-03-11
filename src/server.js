import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import dotenv from "dotenv";
import cors from 'cors'
import connection from "./config/connectDB";
dotenv.config();
const app = express();
app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);



const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log("Server is running on the port " + port);
});
//connection();