import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { EmployeeResponseDTO } from './dtos/employee/response.dto';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async getEmployees(): Promise<EmployeeResponseDTO[]> {
    const employees = await this.employeeRepository.find({
      relations: ['department'],
    });

    return plainToInstance(EmployeeResponseDTO, employees);
  }

  async getEmployeeById(employeeId: number): Promise<EmployeeResponseDTO> {
    const employee = await this.employeeRepository.findOne({
      relations: ['department'],
      where: { id: employeeId },
    });
    if (!employee)
      throw new HttpException(
        { message: `Employee with id = ${employeeId} does not exist.` },
        HttpStatus.BAD_REQUEST,
      );

    return plainToInstance(EmployeeResponseDTO, employee);
  }
}
