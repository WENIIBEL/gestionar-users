import  express  from "express";
const main = () => {
    const app = express();

    const PORT = process.env.PORT || 3000
    app.listen(PORT , () => {
        console.log(`Api reportes escuchando en : `, PORT)
    })

}

main()