import { Request, Response } from "express";
import {StatusCodes} from 'http-status-codes'
import * as yup from 'yup'

export interface ICidade {
    nome:string;
    estado: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome:yup.string().required().min(3),
    estado:yup.string().required().min(3)
})

export const create = async (req: Request<{},{}, ICidade>, res: Response) => {
    let validatedData: ICidade | undefined = undefined; // validate poder ser do tipo um objeto com nome e cidade ou undefined uma variavel sem valor
  
    try{
     validatedData = await bodyValidation.validate(req.body,{abortEarly:false});
   }catch(err){
    const yupError = err as yup.ValidationError;

    const errors: Record<string,string>={};// um obejto cuja chaves sao strings e valores tambem sao strings
    
    yupError.inner.forEach(error => {

        if(error.path === undefined )return;

        errors[error.path] = error.message
    })

    return res.status(StatusCodes.BAD_REQUEST).json({
         errors// validacao de varios cantos e devolver o erro corretamente
    }); // dado que sera mandando para front-end
   }

    return res.send("Created!!")
}


/**
 * validatedData → só vai existir se tudo estiver certo.

err → yupError → é o erro bruto (do catch) que foi convertido.

errors → é o que você envia para o front-end, no formato { campo: mensagem }.
 */

// request pode recerber varios parametos 
//core.ParamsDictionary, ResBody = any, ReqBody = any=> {}{},ICidade

// agora body para nao ser mais any e respeitar a interface
// 
// 
// body =>  (property) Request<{}, {}, ICidade, QueryString.ParsedQs, Record<string, any>>.body: ICidade