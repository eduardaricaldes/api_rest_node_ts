import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup";


type TProperty = "body" | "headers" | "params" | "query";

type TGetSchema = <T>(schema: Schema<T>) => Schema<T>;

type TAllschemas = Record<TProperty, Schema>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllschemas>;

type Tvalidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: Tvalidation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas((schema) => schema);

    const errorsResult: Record<TProperty, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema]) => {
      try {
        schema.validateSync(req[key as TProperty], { abortEarly: false });
      } catch (err) {
        const yupError = err as ValidationError;

        const errors: Record<string, string> = {}; // um objeto cuja chaves sao strings e valores tambem sao strings

        yupError.inner.forEach((error) => {
          if (error.path === undefined) return;

          errors[error.path] = error.message;
        });

        errorsResult[key as TProperty] = errors;
      }
    });

    if (Object.entries(errorsResult).length === 0) {
      return next();
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
    }
  };
