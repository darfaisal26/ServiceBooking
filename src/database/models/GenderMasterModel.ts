
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
  tableName: "gender_master",
  timestamps: false,
})
export default class GenderMaster extends Model<GenderMaster> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  gender_name!: string;

  @HasMany(() => User) // 👈 defines one-to-many relation
  users!: User[];
}

