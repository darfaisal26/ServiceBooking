
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import WorkerProfile from './WorkerProfileModel';
import SkillMaster from './SkillMasterModel';

@Table({
  tableName: 'worker_skills',
  timestamps: false,
})
export default class WorkerSkills extends Model<WorkerSkills> {
  @ForeignKey(() => WorkerProfile)
  @Column(DataType.INTEGER)
  worker_id!: number;

  @ForeignKey(() => SkillMaster)
  @Column(DataType.INTEGER)
  skill_id!: number;

  @BelongsTo(() => WorkerProfile)
  worker!: WorkerProfile;

  @BelongsTo(() => SkillMaster)
  skill!: SkillMaster;
}

