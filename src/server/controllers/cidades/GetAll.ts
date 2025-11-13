// getall - endpoint  de listagem das cidds do bd
import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

export interface IQueryProps {
  page?: number;
  limit?:number;
  filter?:string;
}


export const getallValidation = validation((getSchema) => ({
  query: getSchema(
    yup.object({
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      filter: yup.string().optional().min(1)
    })
  ),
}));

export const getAll = async(req: Request<{},{},{}, IQueryProps>, res: Response) => {
  console.log(req.query);

   res.setHeader('access-control-expose-headers', 'x-total-count');
  res.setHeader('x-total-count', 1);

  let page: number;
  let limit: number;
  let filter: string;
  let notAllowedQueryKeys: string[] = [];
  const allowedKeys = ["page", "limit", "filter"];

  const queryKeys = Object.keys(req.query);

  for (const key of queryKeys) {
    if (allowedKeys.indexOf(key) === -1) {
      notAllowedQueryKeys.push(key);
    }
  }


  if (notAllowedQueryKeys.length > 0) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        query: `${notAllowedQueryKeys.join(",")} não permitidos`
      }
    })
  }


  if(req.query.page){
    page = Number(req.query.page)
  } else {
    page = 1; 
  } 

  if(req.query.filter){
    filter = req.query.filter;
  } else {
    filter = ""
  }

  if(req.query.limit){
    limit = Number(req.query.limit)
  } else {
    limit = 10;
  }

  return res.status(StatusCodes.ACCEPTED).json({
    id:1,
    nome:"Floripa",
    page,
    limit,
    filter,
    cities: [{
      id: 1,
      nome: "Floripa",
    }]
  });
};