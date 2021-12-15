import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("username", ["username"], { unique: true })
@Entity("fa_admin", { schema: "fastadmin" })
export class FaAdmin {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "ID",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "username",
    nullable: true,
    unique: true,
    comment: "用户名",
    length: 20,
  })
  username: string | null;

  @Column("varchar", {
    name: "nickname",
    nullable: true,
    comment: "昵称",
    length: 50,
  })
  nickname: string | null;

  @Column("varchar", {
    name: "password",
    nullable: true,
    comment: "密码",
    length: 32,
  })
  password: string | null;

  @Column("varchar", {
    name: "salt",
    nullable: true,
    comment: "密码盐",
    length: 30,
  })
  salt: string | null;

  @Column("varchar", {
    name: "avatar",
    nullable: true,
    comment: "头像",
    length: 255,
  })
  avatar: string | null;

  @Column("varchar", {
    name: "email",
    nullable: true,
    comment: "电子邮箱",
    length: 100,
  })
  email: string | null;

  @Column("tinyint", {
    name: "loginfailure",
    comment: "失败次数",
    unsigned: true,
    default: () => "'0'",
  })
  loginfailure: number;

  @Column("int", { name: "logintime", nullable: true, comment: "登录时间" })
  logintime: number | null;

  @Column("varchar", {
    name: "loginip",
    nullable: true,
    comment: "登录IP",
    length: 50,
  })
  loginip: string | null;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;

  @Column("varchar", {
    name: "token",
    nullable: true,
    comment: "Session标识",
    length: 59,
  })
  token: string | null;

  @Column("varchar", {
    name: "status",
    comment: "状态",
    length: 30,
    default: () => "'normal'",
  })
  status: string;
}
