import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fa_user_group", { schema: "fastadmin" })
export class FaUserGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "组名",
    length: 50,
  })
  name: string | null;

  @Column("text", { name: "rules", nullable: true, comment: "权限节点" })
  rules: string | null;

  @Column("int", { name: "createtime", nullable: true, comment: "添加时间" })
  createtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;

  @Column("enum", {
    name: "status",
    nullable: true,
    comment: "状态",
    enum: ["normal", "hidden"],
  })
  status: "normal" | "hidden" | null;
}
