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
import ClientProfile from './ClientProfileModel'; 
import Booking from './BookingModel'; 

@Table({
  tableName: 'client_review',
  timestamps: false,
})
export default class ClientReview extends Model<ClientReview> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  ReviewText?: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  Rating!: number;

  @ForeignKey(() => ClientProfile)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  client_id!: number;

  @ForeignKey(() => Booking)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  booking_id!: number;

  @BelongsTo(() => ClientProfile)
  client!: ClientProfile;

  @BelongsTo(() => Booking)
  booking!: Booking;
}
