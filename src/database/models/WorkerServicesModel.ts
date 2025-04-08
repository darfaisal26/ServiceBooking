
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import WorkerProfile from './WorkerProfileModel';
import ServiceMaster from './ServicesMasterModel';

@Table({
  tableName: 'worker_services',
  timestamps: false,
})
export default class WorkerServices extends Model<WorkerServices> {
  @ForeignKey(() => WorkerProfile)
  @Column(DataType.INTEGER)
  worker_id!: number;

  @ForeignKey(() => ServiceMaster)
  @Column(DataType.INTEGER)
  service_id!: number;

  @BelongsTo(() => WorkerProfile)
  worker!: WorkerProfile;

  @BelongsTo(() => ServiceMaster)
  service!: ServiceMaster;
}

