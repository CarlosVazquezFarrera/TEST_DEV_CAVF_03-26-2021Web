import { BaseResponse } from "./ResoponseBase";

export class Response<T> extends BaseResponse{
    Data: T
}