import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // Импортируйте здесь необходимые модули
  controllers: [AppController], // Добавьте ваш контроллер здесь
  providers: [AppService], // Добавьте ваши провайдеры (сервисы) здесь
})
export class AppModule {}