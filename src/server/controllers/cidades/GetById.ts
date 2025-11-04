import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

export interface IParamsProps {
  id?:number;
}


export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    yup.object({
     id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const getById = async(req: Request<IParamsProps>, res: Response) => {
  console.log(req.params);

  return res.status(StatusCodes.ACCEPTED).send('foi?')
};