import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pid", ["pid"], {})
@Entity("fa_area", { schema: "fastadmin" })
export class FaArea {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "ID" })
  id: number;

  @Column("int", { name: "pid", nullable: true, comment: "父id" })
  pid: number | null;

  @Column("varchar", {
    name: "shortname",
    nullable: true,
    comment: "简称",
    length: 100,
  })
  shortname: string | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "名称",
    length: 100,
  })
  name: string | null;

  @Column("varchar", {
    name: "mergename",
    nullable: true,
    comment: "全称",
    length: 255,
  })
  mergename: string | null;

  @Column("tinyint", {
    name: "level",
    nullable: true,
    comment: "层级 0 1 2 省市区县",
  })
  level: number | null;

  @Column("varchar", {
    name: "pinyin",
    nullable: true,
    comment: "拼音",
    length: 100,
  })
  pinyin: string | null;

  @Column("varchar", {
    name: "code",
    nullable: true,
    comment: "长途区号",
    length: 100,
  })
  code: string | null;

  @Column("varchar", {
    name: "zip",
    nullable: true,
    comment: "邮编",
    length: 100,
  })
  zip: string | null;

  @Column("varchar", {
    name: "first",
    nullable: true,
    comment: "首字母",
    length: 50,
  })
  first: string | null;

  @Column("varchar", {
    name: "lng",
    nullable: true,
    comment: "经度",
    length: 100,
  })
  lng: string | null;

  @Column("varchar", {
    name: "lat",
    nullable: true,
    comment: "纬度",
    length: 100,
  })
  lat: string | null;
}
