import { AppDataSource } from "./data-source";
import "dotenv/config"
import app from "./app";

AppDataSource.initialize()
    .then(() => {
        console.log('Database is connected')

        
        app.listen(3000, () => {
            console.log(`Server is running in https://localhost:3000`)
        })
    })
    .catch(err => console.log(err))

