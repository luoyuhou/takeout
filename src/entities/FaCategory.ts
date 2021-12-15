import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("weigh", ["weigh", "id"], {})
@Index("pid", ["pid"], {})
@Entity("fa_category", { schema: "fastadmin" })
export class FaCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "pid",
    comment: "父ID",
    unsigned: true,
    default: () => "'0'",
  })
  pid: number;

  @Column("varchar", {
    name: "type",
    nullable: true,
    comment: "栏目类型",
    length: 30,
  })
  type: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 30 })
  name: string | null;

  @Column("varchar", { name: "nickname", nullable: true, length: 50 })
  nickname: string | null;

  @Column("set", {
    name: "flag",
    nullable: true,
    enum: ["hot", "index", "recommend"],
  })
  flag: ("hot" | "index" | "recommend")[] | null;

  @Column("varchar", {
    name: "image",
    nullable: true,
    comment: "图片",
    length: 100,
  })
  image: string | null;

  @Column("varchar", {
    name: "keywords",
    nullable: true,
    comment: "关键字",
    length: 255,
  })
  keywords: string | null;

  @Column("varchar", {
    name: "description",
    nullable: true,
    comment: "描述",
    length: 255,
  })
  description: string | null;

  @Column("varchar", {
    name: "diyname",
    nullable: true,
    comment: "自定义名称",
    length: 30,
  })
  diyname: string | null;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;

  @Column("int", { name: "weigh", comment: "权重", default: () => "'0'" })
  weigh: number;

  @Column("varchar", {
    name: "status",
    nullable: true,
    comment: "状态",
    length: 30,
  })
  status: string | null;
}
