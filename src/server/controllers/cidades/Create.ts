import { Request, Response } from "express";
import {StatusCodes} from 'http-status-codes'


export interface ICidade {
    name:string;
}

export const create = (req: Request<{},{}, ICidade>, res: Response) => {
    if(req.body.name === undefined){
        return res.status(StatusCodes.BAD_REQUEST).send('informe atributo nome');
    }
    console.log(req.body.name)
}

// request pode recerber varios parametos 
//core.ParamsDictionary, ResBody = any, ReqBody = any=> {}{},ICidade

// agora body para nao ser mais any e respeitar a interface
// 
// 
// body =>  (property) Request<{}, {}, ICidade, QueryString.ParsedQs, Record<string, any>>.body: ICidade