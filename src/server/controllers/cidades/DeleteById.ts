import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

export interface IParamsProps {
  id?:number;
}


export const deletedValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    yup.object({
     id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const deleteById = async(req: Request<IParamsProps>, res: Response) => {
  console.log(req.params);
  const idNumberMock = Number(req.params.id)
  if(idNumberMock === 1234){
    return res.status(StatusCodes.NOT_FOUND).send()
  }
  return res.status(StatusCodes.NO_CONTENT).send();
};