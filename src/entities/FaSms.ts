import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fa_sms", { schema: "fastadmin" })
export class FaSms {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "ID",
    unsigned: true,
  })
  id: number;

  @Column("varchar", {
    name: "event",
    nullable: true,
    comment: "事件",
    length: 30,
  })
  event: string | null;

  @Column("varchar", {
    name: "mobile",
    nullable: true,
    comment: "手机号",
    length: 20,
  })
  mobile: string | null;

  @Column("varchar", {
    name: "code",
    nullable: true,
    comment: "验证码",
    length: 10,
  })
  code: string | null;

  @Column("int", {
    name: "times",
    comment: "验证次数",
    unsigned: true,
    default: () => "'0'",
  })
  times: number;

  @Column("varchar", { name: "ip", nullable: true, comment: "IP", length: 30 })
  ip: string | null;

  @Column("int", {
    name: "createtime",
    nullable: true,
    comment: "创建时间",
    unsigned: true,
    default: () => "'0'",
  })
  createtime: number | null;
}
