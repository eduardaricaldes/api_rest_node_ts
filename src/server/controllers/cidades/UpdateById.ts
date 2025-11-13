import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

// vai receber o id da cdd que vai atualizar
export interface IParamsProps {
  id?: number;
}

// vai receber um body nome de cidade
interface IBodyProps {
  nome: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    })
  ),
  params: getSchema<IParamsProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const updateById = async (req: Request<IParamsProps>, res: Response) => {
  console.log(req.params);
  console.log(req.body)
  const idNumber = Number(req.params.id)

if (idNumber === 123){
    return res.status(StatusCodes.NOT_FOUND).json();
  }

 return res.status(StatusCodes.OK).json({
    message: `${req.body.nome} updated successfully`,
    id:idNumber

  });
  
};
