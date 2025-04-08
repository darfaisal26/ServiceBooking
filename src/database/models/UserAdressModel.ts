
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
import User from './UserModel'; 

@Table({
  tableName: 'user_address',
  timestamps: false,
})
export default class UserAddress extends Model<UserAddress> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  street!: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  city!: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  state!: string;

  @AllowNull(false)
  @Column(DataType.STRING(20))
  zipcode!: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  country!: string;
}
