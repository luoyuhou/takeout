import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fa_auth_group", { schema: "fastadmin" })
export class FaAuthGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "pid",
    comment: "父组别",
    unsigned: true,
    default: () => "'0'",
  })
  pid: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "组名",
    length: 100,
  })
  name: string | null;

  @Column("text", { name: "rules", comment: "规则ID" })
  rules: string;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;

  @Column("varchar", {
    name: "status",
    nullable: true,
    comment: "状态",
    length: 30,
  })
  status: string | null;
}
