import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fa_version", { schema: "fastadmin" })
export class FaVersion {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "ID" })
  id: number;

  @Column("varchar", {
    name: "oldversion",
    nullable: true,
    comment: "旧版本号",
    length: 30,
  })
  oldversion: string | null;

  @Column("varchar", {
    name: "newversion",
    nullable: true,
    comment: "新版本号",
    length: 30,
  })
  newversion: string | null;

  @Column("varchar", {
    name: "packagesize",
    nullable: true,
    comment: "包大小",
    length: 30,
  })
  packagesize: string | null;

  @Column("varchar", {
    name: "content",
    nullable: true,
    comment: "升级内容",
    length: 500,
  })
  content: string | null;

  @Column("varchar", {
    name: "downloadurl",
    nullable: true,
    comment: "下载地址",
    length: 255,
  })
  downloadurl: string | null;

  @Column("tinyint", {
    name: "enforce",
    comment: "强制更新",
    unsigned: true,
    default: () => "'0'",
  })
  enforce: number;

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
