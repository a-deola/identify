export class HttpException extends Error {
  message: string;
  errorCode: any;
  statusCode: number;
  errors: ErrorCode;

  constructor(
    message: string,
    errorCode: ErrorCode,
    statusCode: number,
    errors: any
  ) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}
export enum ErrorCode {
  USER_ALREADY_EXISTS = 1000,
  USER_NOT_FOUND = 1001,
  INCORRECT_PASSWORD = 1002,
  //ERROR_CREATING_USER = "ERROR_CREATING_USER",
}
