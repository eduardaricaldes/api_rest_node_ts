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
     id: yup.number()
     .integer()
     .required()
     .moreThan(0),
    })
  ),
}));

export const getById = async(req: Request<IParamsProps>, res: Response) => {
  const idNumber = Number(req.params.id)
  
  if (idNumber === 123){
    return res.status(StatusCodes.NOT_FOUND).json();
  }

  return res.status(StatusCodes.OK).json({
    id: idNumber
  })
};
