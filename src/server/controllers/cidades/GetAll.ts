// getall - endpooimt que vai chamada p listar toas das cidds do banco
import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

export interface IQueryProps {
  page?: number;
  limit?:number;
  filter?:string;
}

// essa interface ira servir para paginacao de cidades, como um limite

export const getallValidation = validation((getSchema) => ({
  query: getSchema(
    yup.object({
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      filter: yup.string().optional().min(1)
    })
  ),
}));

export const getall = async(req: Request<{},{},{}, IQueryProps>, res: Response) => {
  console.log(req.query);

  return res.status(StatusCodes.ACCEPTED).send('nao implementado')
};