import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("charges_config_index", ["type", "name"], { unique: true })
@Entity("fa_charges_config", { schema: "fastadmin" })
export class FaChargesConfig {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("enum", {
    name: "type",
    comment: "游戏模式:1=单人模式,2=生涯模式,3=店内联机",
    enum: ["1", "2", "3"],
  })
  type: "1" | "2" | "3";

  @Column("varchar", { name: "name", comment: "名称", length: 30 })
  name: string;

  @Column("tinyint", { name: "level", comment: "等级" })
  level: number;

  @Column("int", { name: "value", nullable: true, comment: "值" })
  value: number | null;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;
}
