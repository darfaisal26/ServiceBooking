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
import UserNotificationPreference  from './UserNotificationPreferenceModel';

@Table({
  tableName: 'notification_master',
  timestamps: false,
})
export default class NotificationMaster extends Model<NotificationMaster> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  notification_name!: string;

  @AllowNull(false)
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;

  @AllowNull(false)
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  updated_at!: Date;

  @HasMany(() => UserNotificationPreference)
  preferences!: UserNotificationPreference[];
}
