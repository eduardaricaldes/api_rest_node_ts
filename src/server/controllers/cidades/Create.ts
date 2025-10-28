import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middleware";

export interface ICidade {
  nome: string;
  estado: string;
}

interface IFilter {
  filter?: string;
}

//validation ira retonar um middleware que ira validar o body,query,params e headers ao
// mesmo temp

export const createValidation = validation({
  body: yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3), 
  }),
  query: yup.object().shape({
    filter: yup.string().required().min(3),
  })
})






export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body);
     return res.send("Created!!");
};



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
