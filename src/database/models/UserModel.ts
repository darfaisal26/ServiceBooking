
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
  Unique,
  ForeignKey,
} from 'sequelize-typescript';
import Role from './RoleModel';
import Gender from './GenderMasterModel';

@Table({
  tableName: 'users',
  timestamps: false,
})
export default class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  name!: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(255))
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  password!: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  contactinfo?: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  iqamano?: string;

  @AllowNull(true)
  @Column(DataType.DATE)
  iqama_expiry?: Date;

  @ForeignKey(() => Role)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  roleid!: number;

  @ForeignKey(() => Gender)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  gender_id!: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  age?: string;
}
