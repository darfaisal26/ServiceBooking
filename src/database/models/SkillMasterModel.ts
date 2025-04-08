

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
import WorkerSkills from './WorkerSkillsModel';

@Table({
  tableName: 'skill_master',
  timestamps: false,
})
export default class SkillMaster extends Model<SkillMaster> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  skill_name!: string;

  @AllowNull(false)
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;

  @AllowNull(false)
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  is_active!: boolean;

  @HasMany(() => WorkerSkills)
  workerSkills!: WorkerSkills[];
}
