import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()
app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))


import userRoute from "./route/user.route";
import bookRoute from "./route/book.route"

app.use("/user", userRoute);
app.use("/book",bookRoute)
export { app }