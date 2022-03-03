import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_MYSQL_HOST,
  database: process.env.DATABASE_MYSQL_DATABASE,
  username: process.env.DATABASE_MYSQL_USERNAME,
  password: process.env.DATABASE_MYSQL_PASSWORD,
  autoLoadEntities: true,
};

export default connectionOptions;
