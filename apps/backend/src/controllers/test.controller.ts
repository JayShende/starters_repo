import { Request, Response } from "express";

import HttpStatus  from "http-status";
import { response } from "../utils/responses";
import testService from "../services/test.service";
const loggerFunction=(req:Request,res:Response)=>{
    const answer= testService.logger();

    return response(res,HttpStatus.OK,"All Okay",answer);
}

export default{
    loggerFunction
}