import { Optional } from "sequelize";
import {
  Table,
  Model,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

interface UserAttributes {
  id: number;
  name: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({
  timestamps: true,
  tableName: "users",
  modelName: "User",
})
export default class User extends Model<
  UserAttributes,
  UserCreationAttributes
> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;
}
export { User };
