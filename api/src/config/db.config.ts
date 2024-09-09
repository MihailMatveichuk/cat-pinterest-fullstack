import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'host.docker.internal',
  port: 6501,
  username: 'postgres',
  password: '1',
  database: 'support_lk_db',
  entities: [__dirname + '/**/*.entity.{js,ts}'],
  autoLoadEntities: true,
  synchronize: true,
};
