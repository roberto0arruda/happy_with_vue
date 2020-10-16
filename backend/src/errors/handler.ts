import { ErrorRequestHandler, response } from 'express';


interface ValidationError {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, reponse, next) => {

    return response.status(500).json({message: 'Internal server error'})
};

export default errorHandler;