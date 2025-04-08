
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
import Payment  from "./PaymentModel";

@Table({
  tableName: "payment_method_master",
  timestamps: false,
})
export default class PaymentMethodMaster extends Model<PaymentMethodMaster> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  payment_method!: string;

  @AllowNull(false)
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  is_active!: boolean;

  @AllowNull(false)
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_on!: Date;

  @HasMany(() => Payment)
  payments!: Payment[];
}
