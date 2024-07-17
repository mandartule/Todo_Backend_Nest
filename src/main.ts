import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

 
  
  
  const corsOptions: CorsOptions = {
    origin: [
      'https://to-do-frontend-5zw15yjs2-mandartules-projects.vercel.app',
      'http://todo-backend-nest.onrender.com/',
      'https://todo-backend-nest.onrender.com/',
      'http://todo-backend-nest.onrender.com/',
      'https://localhost:8080',
      'http://localhost:8080',
      'https://localhost:8081',
      'http://localhost:8081',
      'https://44.226.145.213',
      'http://44.226.145.213',
      'https://54.187.200.255',
      'http://54.187.200.255',
      'https://34.213.214.55',
      'http://34.213.214.55',
      'https://35.164.95.156',
      'http://35.164.95.156',
      'https://44.230.95.183',
      'http://44.230.95.183',
      'https://44.229.200.200',
      'http://44.229.200.200'
    ],

    
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  };
  //enabled cors  for the application
  app.enableCors(corsOptions);

  
  await app.listen(3333);
  //enabled validation pipe for the application globally
  

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
