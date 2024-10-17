import { Get, Query, Route, Tags } from 'tsoa';
import { BasicResponse } from './types';
import { IController } from './interfaces';
import { LogSuccess } from '../utils/looger';

@Route('/api/hello')
@Tags('HelloController')
export class HelloController implements IController {
  /**
   *Controller to retreive a message "Hello {name}" JSON
   * @param {string | undefinded} name  Name of user to be greeted
   * @returns {BasicResponse} Promise<BasicResponse>
   */
  @Get('/')
  public async getMessage(@Query() name?: string): Promise<BasicResponse> {
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
