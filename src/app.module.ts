import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import connectionOptions from 'typeorm.config';
import { AppController } from './app.controller';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(connectionOptions),
    EmployeeModule,
    DepartmentModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
