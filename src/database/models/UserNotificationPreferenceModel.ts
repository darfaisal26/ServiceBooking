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
import  NotificationMaster  from './NotificationMasterModel';
import User from './UserModel'; 

@Table({
  tableName: 'user_notification_preferences',
  timestamps: false,
})
export default class UserNotificationPreference extends Model<UserNotificationPreference> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id!: number;

  @ForeignKey(() => NotificationMaster)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  notification_id!: number;

  @AllowNull(false)
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  is_enabled!: boolean;

  @BelongsTo(() => NotificationMaster)
  notification!: NotificationMaster;

  @BelongsTo(() => User)
  user!: User;
}
