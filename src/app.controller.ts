import { HttpStatus, Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getMain(@Res() res) {
    //sending response 
    //HttpStatus.OK is equal to 200

    const mainData = this.appService.getMain();
    
    //@Res decorator is used to send response
    res.status(HttpStatus.OK).json(mainData);
  

  }
}