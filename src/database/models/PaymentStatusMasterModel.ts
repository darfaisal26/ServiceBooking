import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
  HasMany,
} from "sequelize-typescript";

import  Payment  from "./PaymentModel";

@Table({
  tableName: "payment_status_master",
  timestamps: false,
})
export default class PaymentStatusMaster extends Model<PaymentStatusMaster> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  payment_status!: string;

  @AllowNull(false)
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  is_active!: boolean;

  @HasMany(() => Payment)
  payments!: Payment[];
}
