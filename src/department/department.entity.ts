import { Employee } from 'src/employee/employee.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'offices' })
export class Department {
  @PrimaryGeneratedColumn({ name: 'office_id' })
  id: number;

  @Column({ name: 'address' })
  address: string;

  @Column({ name: 'city' })
  city: string;

  @Column({ name: 'state', length: 2 })
  state: string;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];
}
