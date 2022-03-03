import { Department } from 'src/department/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'employees' })
export class Employee {
  @PrimaryGeneratedColumn({ name: 'employee_id' })
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'job_title' })
  jobTitle: string;

  @Column({ name: 'salary' })
  salary: string;

  @ManyToOne(() => Department, (department) => department.employees)
  @JoinColumn({ name: 'office_id' })
  department: Department;
}
