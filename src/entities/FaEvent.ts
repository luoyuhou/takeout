import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("title", ["title"], { unique: true })
@Entity("fa_event", { schema: "fastadmin" })
export class FaEvent {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", comment: "操作者", unsigned: true })
  userId: number;

  @Column("varchar", {
    name: "title",
    unique: true,
    comment: "活动名称",
    length: 128,
  })
  title: string;

  @Column("text", { name: "description", comment: "活动描述" })
  description: string;

  @Column("tinyint", {
    name: "prop_type",
    comment: "奖励类型",
    default: () => "'0'",
  })
  propType: number;

  @Column("int", { name: "prop_amount", comment: "奖励数量", unsigned: true })
  propAmount: number;

  @Column("tinyint", {
    name: "repeat",
    comment: "活动是否重复参加",
    width: 1,
    default: () => "'1'",
  })
  repeat: boolean;

  @Column("int", {
    name: "cycle",
    comment: "周期，单位/天",
    unsigned: true,
    default: () => "'0'",
  })
  cycle: number;

  @Column("tinyint", {
    name: "status",
    comment: "活动状态",
    unsigned: true,
    default: () => "'1'",
  })
  status: number;

  @Column("int", {
    name: "createtime",
    comment: "活动开始时间",
    unsigned: true,
  })
  createtime: number;

  @Column("int", {
    name: "updatetime",
    nullable: true,
    comment: "活动更新时间",
    unsigned: true,
  })
  updatetime: number | null;
}
