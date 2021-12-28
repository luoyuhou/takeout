import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user_wx_id_unique", ["wxId"], { unique: true })
@Index("username", ["username"], { unique: true })
@Index("user_id", ["userId"], { unique: true })
@Index("email", ["email"], {})
@Index("mobile", ["mobile"], {})
@Entity("fa_user", { schema: "fastadmin" })
export class FaUser {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "ID",
    unsigned: true,
  })
  id: number;

  @Column("varchar", { name: "wx_id", unique: true, length: 64 })
  wxId: string;

  @Column("varchar", {
    name: "user_id",
    unique: true,
    comment: "用户id",
    length: 50,
  })
  userId: string;

  @Column("int", {
    name: "group_id",
    comment: "组别ID",
    unsigned: true,
    default: () => "'0'",
  })
  groupId: number;

  @Column("varchar", {
    name: "username",
    unique: true,
    comment: "用户名",
    length: 32,
  })
  username: string;

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
    length: 64,
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
    name: "email",
    nullable: true,
    comment: "电子邮箱",
    length: 100,
  })
  email: string | null;

  @Column("varchar", {
    name: "mobile",
    nullable: true,
    comment: "手机号",
    length: 16,
  })
  mobile: string | null;

  @Column("varchar", {
    name: "avatar",
    nullable: true,
    comment: "头像",
    length: 255,
  })
  avatar: string | null;

  @Column("tinyint", {
    name: "level",
    comment: "等级",
    unsigned: true,
    default: () => "'0'",
  })
  level: number;

  @Column("tinyint", {
    name: "gender",
    comment: "性别",
    unsigned: true,
    default: () => "'0'",
  })
  gender: number;

  @Column("date", { name: "birthday", nullable: true, comment: "生日" })
  birthday: string | null;

  @Column("varchar", {
    name: "bio",
    nullable: true,
    comment: "格言",
    length: 100,
  })
  bio: string | null;

  @Column("decimal", {
    name: "money",
    comment: "余额",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  money: string;

  @Column("int", { name: "score", comment: "积分", default: () => "'0'" })
  score: number;

  @Column("int", {
    name: "successions",
    comment: "连续登录天数",
    unsigned: true,
    default: () => "'1'",
  })
  successions: number;

  @Column("int", {
    name: "maxsuccessions",
    comment: "最大连续登录天数",
    unsigned: true,
    default: () => "'1'",
  })
  maxsuccessions: number;

  @Column("int", { name: "prevtime", nullable: true, comment: "上次登录时间" })
  prevtime: number | null;

  @Column("int", { name: "logintime", nullable: true, comment: "登录时间" })
  logintime: number | null;

  @Column("varchar", {
    name: "loginip",
    nullable: true,
    comment: "登录IP",
    length: 50,
  })
  loginip: string | null;

  @Column("tinyint", {
    name: "loginfailure",
    comment: "失败次数",
    unsigned: true,
    default: () => "'0'",
  })
  loginfailure: number;

  @Column("varchar", {
    name: "joinip",
    nullable: true,
    comment: "加入IP",
    length: 50,
  })
  joinip: string | null;

  @Column("int", { name: "jointime", nullable: true, comment: "加入时间" })
  jointime: number | null;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;

  @Column("varchar", {
    name: "token",
    nullable: true,
    comment: "Token",
    length: 50,
  })
  token: string | null;

  @Column("varchar", {
    name: "status",
    nullable: true,
    comment: "状态",
    length: 30,
  })
  status: string | null;

  @Column("varchar", {
    name: "verification",
    nullable: true,
    comment: "验证",
    length: 255,
  })
  verification: string | null;
}
