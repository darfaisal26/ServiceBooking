
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import User from './UserModel';
@Table({
  tableName: 'client_profile',
  timestamps: false,
})
export default class ClientProfile extends Model<ClientProfile> {
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
}
