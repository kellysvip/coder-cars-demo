import { Response } from "express";

export function sendResponse(
  res: Response,
  status: number,
  success: boolean,
  data: Record<string, string | number | boolean>,
  errors: Record<string, unknown> | null,
  message: string
) {
  const response: {
    success?: boolean;
    data?: Record<string, string | number | boolean>;
    errors?: Record<string, unknown> | null;
    message?: string;
  } = {};
  if (success) response.success = success;
  if (data) response.data = data;
  if (errors) response.errors = errors;
  if (message) response.message = message;
  return res.status(status).json(response);
}

export class AppError extends Error {
  public statusCode: number;
  // public message: string;
  public errorType: string;
  // all errors using this class are operational errors.
  public isOperational = true;
  constructor(statusCode: number, message: string, errorType: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorType = errorType;

    // create a stack trace for debugging (Error obj, void obj to avoid stack polution)
    Error.captureStackTrace(this, this.constructor);
  }
}



