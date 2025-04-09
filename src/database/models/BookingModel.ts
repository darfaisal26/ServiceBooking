import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import DriverProfile from "./DriverProfileModel";
import WorkerProfile from "./WorkerProfileModel";
import ClientProfile from "./ClientProfileModel";
import ServiceMaster from "./ServicesMasterModel";
import UserAddress from "./UserAdressModel";

@Table({
  tableName: "bookings",
  timestamps: false,
})
export default class Booking extends Model<Booking> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => DriverProfile)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  driver_id!: number;

  @ForeignKey(() => WorkerProfile)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  worker_id!: number;

  @ForeignKey(() => ClientProfile)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  client_id!: number;

  @ForeignKey(() => ServiceMaster)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  service_id!: number;

  @ForeignKey(() => UserAddress)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  address_id!: number;

  @AllowNull(false)
  @Column(DataType.TIME)
  start_time!: string;

  @AllowNull(false)
  @Column(DataType.TIME)
  end_time!: string;

  @AllowNull(false)
  @Column(DataType.DATEONLY)
  booking_date!: string;

  @AllowNull(false)
  @Column(
    DataType.ENUM(
      "Pending",
      "Confirmed",
      "In Progress",
      "Completed",
      "Cancelled"
    )
  )
  booking_status!:
    | "Pending"
    | "Confirmed"
    | "In Progress"
    | "Completed"
    | "Cancelled";

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  is_active!: boolean;

  @AllowNull(false)
  @Column(DataType.DATE)
  created_on!: Date;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  Created_by!: number;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  updated_by?: number;

  @BelongsTo(() => DriverProfile)
  driver!: DriverProfile;

  @BelongsTo(() => WorkerProfile)
  worker!: WorkerProfile;

  @BelongsTo(() => ClientProfile, { foreignKey: "client_id" })
  client!: ClientProfile;

  @BelongsTo(() => ServiceMaster)
  service!: ServiceMaster;

  @BelongsTo(() => UserAddress)
  address!: UserAddress;
}
