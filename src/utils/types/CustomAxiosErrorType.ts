import { AxiosError } from "axios";

export type CustomAxiosError = AxiosError<{
  error: string;
  message: string;
  statusCode: number;
}>;
