import express , {Request, Response} from 'express'
import { usuarios } from '../../../data-users/usuarios';

const routers = express.Router();

const apiVersion = `/api/v1 `

routers.use(usuarios)