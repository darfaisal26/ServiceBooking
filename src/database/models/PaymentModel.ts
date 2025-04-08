

import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import  PaymentMethodMaster  from './PaymentMethodMasterModel';
import  PaymentStatusMaster  from './PaymentStatusMasterModel';



@Table({
  tableName: 'payments',
  timestamps: false,
})
export default class Payment extends Model<Payment> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => PaymentMethodMaster)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  payment_method_id!: number;

  @ForeignKey(() => PaymentStatusMaster)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  payment_status_id!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  booking_id!: number; 

  @AllowNull(false)
  @Column(DataType.STRING(100))
  transaction_id!: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL(10, 2))
  amount!: number;

  @AllowNull(false)
  @Column(DataType.DECIMAL(10, 2))
  balance!: number;

  @AllowNull(false)
  @Column({ type: DataType.ENUM('Active', 'Inactive'), defaultValue: 'Active' })
  status!: 'Active' | 'Inactive';

  @AllowNull(false)
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_on!: Date;

  @BelongsTo(() => PaymentMethodMaster)
  paymentMethod!: PaymentMethodMaster;

  @BelongsTo(() => PaymentStatusMaster)
  paymentStatus!: PaymentStatusMaster;
}
