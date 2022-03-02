import { Severity } from "./Severity";

export interface CustomError {
    errorCode? : string;
    message : string;
    severity? : Severity;
}