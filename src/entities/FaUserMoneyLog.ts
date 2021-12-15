import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fa_user_money_log", { schema: "fastadmin" })
export class FaUserMoneyLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "user_id",
    comment: "会员ID",
    unsigned: true,
    default: () => "'0'",
  })
  userId: number;

  @Column("decimal", {
    name: "money",
    comment: "变更余额",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  money: string;

  @Column("decimal", {
    name: "before",
    comment: "变更前余额",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  before: string;

  @Column("decimal", {
    name: "after",
    comment: "变更后余额",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  after: string;

  @Column("varchar", {
    name: "memo",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  memo: string | null;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;
}
