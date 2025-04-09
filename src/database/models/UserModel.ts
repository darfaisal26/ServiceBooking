
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
  BelongsTo,
} from "sequelize-typescript";
import Role from "./RoleModel";
import Gender from "./GenderMasterModel";
import GenderMaster from "./GenderMasterModel";

@Table({
  tableName: "users",
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

  @BelongsTo(() => Role) // 👈 sets up access to Role data
  role!: Role;

  @ForeignKey(() => Gender)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  gender_id!: number;

  @BelongsTo(() => GenderMaster) // 👈 sets up access to Role data
  gender!: GenderMaster;

  @AllowNull(true)
  @Column(DataType.STRING)
  age?: string;
}
