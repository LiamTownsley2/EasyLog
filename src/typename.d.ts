import { LogType } from './StaticValues.js';
declare module "easylog" {
    export function log(message: string, type?: LogType): void
  }