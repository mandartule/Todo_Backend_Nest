import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);
  
  
  const corsOptions: CorsOptions = {
    origin: [
      'https://www.todo-backend-nest.onrender.com',
      'http://todo-backend-nest.onrender.com/',
      'https://todo-backend-nest.onrender.com/',
      'http://todo-backend-nest.onrender.com/',
      'https://localhost:3333',
      'http://localhost:3333',
      'https://50.17.81.170:3333',
      'http://50.17.81.170:3000',
      'https://50.17.81.170:8080',
      'http://50.17.81.170:8080'
    ],

    
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  };

  //enabled cors  for the application
  app.enableCors(corsOptions);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
