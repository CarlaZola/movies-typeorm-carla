import "reflect-metadata"
import "express-async-errors"
import express, { Application, json } from "express";
import { handleErrors } from "./error";
import { moviesRoutes } from "./routes/movies.routes";

const app: Application = express()

app.use(json())

app.use('/movies', moviesRoutes)

app.use(handleErrors)

export default app