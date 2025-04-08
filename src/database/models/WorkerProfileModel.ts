import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';

import User from './UserModel';
import WorkerServices from './WorkerServicesModel';
import WorkerSkills from './WorkerSkillsModel';

@Table({
  tableName: 'worker_profile',
  timestamps: false,
})
export default class WorkerProfile extends Model<WorkerProfile> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id!: number;

  @AllowNull(false)
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;

  @AllowNull(false)
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  updated_at!: Date;

  @AllowNull(false)
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  is_active!: boolean;

  @Column(DataType.INTEGER)
  experience?: number;

  // Associations
  @HasMany(() => WorkerServices)
  workerServices!: WorkerServices[];

  @HasMany(() => WorkerSkills)
  workerSkills!: WorkerSkills[];
}
