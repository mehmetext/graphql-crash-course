import { BaseContext } from "@apollo/server";

export interface Context extends BaseContext {
  token: string;
}
