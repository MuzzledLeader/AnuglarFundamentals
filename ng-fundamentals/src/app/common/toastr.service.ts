import { InjectionToken } from "@angular/core";

export let TOASTER_TOKEN = new InjectionToken<IToaster>('toaster');

export interface IToaster {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}
