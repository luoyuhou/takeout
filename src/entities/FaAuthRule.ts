import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("name", ["name"], { unique: true })
@Index("pid", ["pid"], {})
@Index("weigh", ["weigh"], {})
@Entity("fa_auth_rule", { schema: "fastadmin" })
export class FaAuthRule {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("enum", {
    name: "type",
    comment: "menu为菜单,file为权限节点",
    enum: ["menu", "file"],
    default: () => "'file'",
  })
  type: "menu" | "file";

  @Column("int", {
    name: "pid",
    comment: "父ID",
    unsigned: true,
    default: () => "'0'",
  })
  pid: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    unique: true,
    comment: "规则名称",
    length: 100,
  })
  name: string | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "规则名称",
    length: 50,
  })
  title: string | null;

  @Column("varchar", {
    name: "icon",
    nullable: true,
    comment: "图标",
    length: 50,
  })
  icon: string | null;

  @Column("varchar", {
    name: "url",
    nullable: true,
    comment: "规则URL",
    length: 255,
  })
  url: string | null;

  @Column("varchar", {
    name: "condition",
    nullable: true,
    comment: "条件",
    length: 255,
  })
  condition: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;

  @Column("tinyint", {
    name: "ismenu",
    comment: "是否为菜单",
    unsigned: true,
    default: () => "'0'",
  })
  ismenu: number;

  @Column("enum", {
    name: "menutype",
    nullable: true,
    comment: "菜单类型",
    enum: ["addtabs", "blank", "dialog", "ajax"],
  })
  menutype: "addtabs" | "blank" | "dialog" | "ajax" | null;

  @Column("varchar", {
    name: "extend",
    nullable: true,
    comment: "扩展属性",
    length: 255,
  })
  extend: string | null;

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
