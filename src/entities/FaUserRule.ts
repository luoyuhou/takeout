import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fa_user_rule", { schema: "fastadmin" })
export class FaUserRule {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "pid", nullable: true, comment: "父ID" })
  pid: number | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "名称",
    length: 50,
  })
  name: string | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "标题",
    length: 50,
  })
  title: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 100,
  })
  remark: string | null;

  @Column("tinyint", {
    name: "ismenu",
    nullable: true,
    comment: "是否菜单",
    width: 1,
  })
  ismenu: boolean | null;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;

  @Column("int", {
    name: "weigh",
    nullable: true,
    comment: "权重",
    default: () => "'0'",
  })
  weigh: number | null;

  @Column("enum", {
    name: "status",
    nullable: true,
    comment: "状态",
    enum: ["normal", "hidden"],
  })
  status: "normal" | "hidden" | null;
}
