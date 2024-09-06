import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './card/card.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 6500,
      username: 'postgres',
      password: '1',
      database: 'support_lk_db',
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true,
    }),
    CardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
