// cidades.controller.ts
import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

export interface ICidade {
  nome: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(
    yup.object({
      nome: yup.string().required().min(3),
    })
  ),
}));


export const create = async(req: Request<{},{}, ICidade>, res: Response) => {
  console.log(req.body)
  return res.status(StatusCodes.CREATED).json({
    message: `${req.body.nome} created successfully`,
    id: 1,
  })
};
