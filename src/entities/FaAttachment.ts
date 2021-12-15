import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fa_attachment", { schema: "fastadmin" })
export class FaAttachment {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "ID",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "admin_id",
    comment: "管理员ID",
    unsigned: true,
    default: () => "'0'",
  })
  adminId: number;

  @Column("int", {
    name: "user_id",
    comment: "会员ID",
    unsigned: true,
    default: () => "'0'",
  })
  userId: number;

  @Column("varchar", {
    name: "url",
    nullable: true,
    comment: "物理路径",
    length: 255,
  })
  url: string | null;

  @Column("varchar", {
    name: "imagewidth",
    nullable: true,
    comment: "宽度",
    length: 30,
  })
  imagewidth: string | null;

  @Column("varchar", {
    name: "imageheight",
    nullable: true,
    comment: "高度",
    length: 30,
  })
  imageheight: string | null;

  @Column("varchar", {
    name: "imagetype",
    nullable: true,
    comment: "图片类型",
    length: 30,
  })
  imagetype: string | null;

  @Column("int", {
    name: "imageframes",
    comment: "图片帧数",
    unsigned: true,
    default: () => "'0'",
  })
  imageframes: number;

  @Column("varchar", {
    name: "filename",
    nullable: true,
    comment: "文件名称",
    length: 100,
  })
  filename: string | null;

  @Column("int", {
    name: "filesize",
    comment: "文件大小",
    unsigned: true,
    default: () => "'0'",
  })
  filesize: number;

  @Column("varchar", {
    name: "mimetype",
    nullable: true,
    comment: "mime类型",
    length: 100,
  })
  mimetype: string | null;

  @Column("varchar", {
    name: "extparam",
    nullable: true,
    comment: "透传数据",
    length: 255,
  })
  extparam: string | null;

  @Column("int", { name: "createtime", nullable: true, comment: "创建日期" })
  createtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;

  @Column("int", { name: "uploadtime", nullable: true, comment: "上传时间" })
  uploadtime: number | null;

  @Column("varchar", {
    name: "storage",
    comment: "存储位置",
    length: 100,
    default: () => "'local'",
  })
  storage: string;

  @Column("varchar", {
    name: "sha1",
    nullable: true,
    comment: "文件 sha1编码",
    length: 40,
  })
  sha1: string | null;
}
