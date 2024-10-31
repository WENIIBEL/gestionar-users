import express, {Request,Response} from 'express';

const router = express.Router()
router.get("/usuarios", (req:Request, res:Response) => {
    res.send ({
        ok:true,
        message: 'PENDIENTE'
    })
    
})

export{router}