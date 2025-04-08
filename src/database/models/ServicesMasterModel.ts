
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
  HasMany,
} from 'sequelize-typescript';
import WorkerServices from './WorkerServicesModel';

@Table({
  tableName: 'service_master',
  timestamps: false,
})
export default class ServiceMaster extends Model<ServiceMaster> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  service_name!: string;

  @AllowNull(false)
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;

  @AllowNull(false)
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  is_active!: boolean;

  @HasMany(() => WorkerServices)
  workerServices!: WorkerServices[];
}

