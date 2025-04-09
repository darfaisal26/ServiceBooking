
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
import User from './UserModel';

@Table({
  tableName: "roles",
  timestamps: false,
})
export default class Role extends Model<Role> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  role_name!: string;

  @HasMany(() => User) // 👈 defines one-to-many relation
  users!: User[];
}
