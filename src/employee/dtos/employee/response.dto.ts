import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@Exclude()
class EmployeeDepartmentDTO {
  @Expose()
  address: string;

  @Expose()
  city: string;

  @Expose()
  state: string;
}

@Exclude()
export class EmployeeResponseDTO {
  @Expose()
  @Transform(({ obj }) => `${obj.lastName}, ${obj.firstName}`)
  employeeName: string;

  @Expose()
  @Transform(
    ({ obj }) =>
      `${obj.firstName.toLowerCase()}.${obj.lastName.toLowerCase()}@webcloud.com`,
  )
  email: string;

  @Expose()
  @Transform(({ obj }) => `PKR: ${obj.salary}`)
  salary: number;

  @Expose({ name: 'jobTitle' })
  designation: string;

  @Expose({ name: 'department' })
  @ValidateNested({ each: true })
  @Type(() => EmployeeDepartmentDTO)
  officeLocation: EmployeeDepartmentDTO;
}
