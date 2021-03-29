import { BaseResponse } from "./ResoponseBase";

export class Response<T> extends BaseResponse{
    data: T
}