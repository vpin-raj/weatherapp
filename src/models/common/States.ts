import { CustomError } from "./CustomError";


export interface States <T> {
    loading : boolean;
    error : CustomError;
    data : T
} 