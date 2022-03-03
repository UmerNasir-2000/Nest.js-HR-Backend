import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  getEmployees() {
    return this.employeeService.getEmployees();
  }

  @Get(':employeeId')
  getEmployeeById(@Param('employeeId', ParseIntPipe) employeeId: number) {
    return this.employeeService.getEmployeeById(employeeId);
  }
}
