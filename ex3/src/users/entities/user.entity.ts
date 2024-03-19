import { Exclude } from 'class-transformer';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User: ' + this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User: ' + this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User: ' + this.id);
  }
}
