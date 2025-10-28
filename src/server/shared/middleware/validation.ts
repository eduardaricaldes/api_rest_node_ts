import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from 'yup'

type TProperty = 'body' | 'header'|'params' | 'query';

type TAllschemas = Record<TProperty, Schema>;

//middleware de validacao generico
type Tvalidation = (schemas:Partial<TAllschemas>) => RequestHandler;

export const validation: Tvalidation = (schemas) => async (req,res,next) => { 
  console.log(schemas)

  Object.entries(schemas).forEach(([key, schema])=>{
    try {
         schema.validateSync(req[key as TProperty], { abortEarly: false });
        // return next();
      } catch (err) {
        const yupError = err as ValidationError;
    
        const errors: Record<string, string> = {}; // um obejto cuja chaves sao strings e valores tambem sao strings
    
        yupError.inner.forEach((error) => {
          if (error.path === undefined) return;
    
          errors[error.path] = error.message;
        });
    
        // return res.status(StatusCodes.BAD_REQUEST).json({
        //   errors, // validacao de varios cantos e devolver o erro corretamente
        // }); // dado que sera mandando para front-end
      }
  }) ;
}




