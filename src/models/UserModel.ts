import { Column, Model, Table, DataType, AutoIncrement, AllowNull } from 'sequelize-typescript';
import { IUser } from '@/domain/entities/user.entity';

@Table({
  timestamps: true,
  freezeTableName: false,
  tableName: 'users',
  underscored: true,
})
export class User extends Model {
  @AutoIncrement
  @Column({
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    type: DataType.BIGINT,
  })
  declare id?: number;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;
}
