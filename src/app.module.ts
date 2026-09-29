import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from '@/tag/tag.entity';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    // ObserveModule.forRoot({
    //   appKey: 'YOUR_APP_KEY',
    //   appSecret: 'YOUR_APP_SECRET',
    //   serviceId: 'blog',
    // }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'CHARITH-PC',
      port: 1433,
      username: 'DevUser',
      password: 'Abcd1234$',
      database: 'BlogDB',
      options: {
        encrypt: true, // Set to true if your database enforces encryption
        trustServerCertificate: true, // ◄ Add this line to trust the self-signed cert
      },
      entities: [TagEntity],
      synchronize: true, //dont use on production
    }),
    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
