import { AppDataSource } from "./data-source";
import "dotenv/config"
import app from "./app";

AppDataSource.initialize()
    .then(() => {
        console.log('Database is connected')

        const PORT = +(process.env.DB_PORT!) || 3000
        app.listen(PORT, () => {
            console.log(`Server is running in https://localhost:${PORT}`)
        })
    })
    .catch(err => console.log(err))

