import { BasicResponse } from './types';
import { IController } from './interfaces';
import { LogSuccess } from '../utils/looger';

export class HelloController implements IController {
  public async getMessage(name?: string): Promise<BasicResponse> {
    LogSuccess('[/api/hello] GET Request');
    if (name) {
      return {
        message: `Hello ${name}`,
      };
    }
    return {
      message: 'Hello World',
    };
  }
}
