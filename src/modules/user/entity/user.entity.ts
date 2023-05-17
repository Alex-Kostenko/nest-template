import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  fullName: string;

  @Column
  email: number;

  @Column
  password: string;

  @Column
  googleId: string;

  @Column
  picture: string;
}
