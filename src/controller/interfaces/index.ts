import type { BasicResponse } from '../types';

export interface IController {
  getMessage(name?: string): Promise<BasicResponse>;
}
