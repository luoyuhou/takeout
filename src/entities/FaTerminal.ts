import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("terminal_index", ["number"], { unique: true })
@Entity("fa_terminal", { schema: "fastadmin" })
export class FaTerminal {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "number",
    unique: true,
    comment: "设备编号",
    length: 64,
  })
  number: string;

  @Column("varchar", { name: "name", comment: "设备名称", length: 64 })
  name: string;

  @Column("tinyint", {
    name: "state",
    comment: "设备状态",
    width: 1,
    default: () => "'0'",
  })
  state: boolean;

  @Column("tinyint", { name: "group", comment: "设备分组", unsigned: true })
  group: number;

  @Column("tinyint", { name: "level", comment: "设备级别", unsigned: true })
  level: number;

  @Column("varchar", {
    name: "address",
    nullable: true,
    comment: "设备位置",
    length: 64,
  })
  address: string | null;

  @Column("int", {
    name: "usetime",
    comment: "设备使用时间",
    unsigned: true,
    default: () => "'0'",
  })
  usetime: number;

  @Column("tinyint", {
    name: "available",
    comment: "设备可用",
    width: 1,
    default: () => "'1'",
  })
  available: boolean;

  @Column("int", { name: "createtime", nullable: true, comment: "投用时间" })
  createtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;

  @Column("int", { name: "deletetime", nullable: true, comment: "删除时间" })
  deletetime: number | null;
}
