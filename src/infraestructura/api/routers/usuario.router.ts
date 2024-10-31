import express, {Request,Response} from 'express';
import { usuarios } from '../../../data-users/usuarios';
export{router}

export const usuariosRouters = () => {
    const router = express.Router()
router.get("/usuarios", (req:Request, res:Response) => {
    const getUsers = usuarios
    res.send ({
        ok:true,
        data: getUsers,
        message: 'Obtención de usuarios exitosa'
    })
    
})


router.post("/usuarios", (req:Request, res:Response) => {
    res.send ({
        ok:true,
        message: 'PENDIENTE'
    })
    

})
}