import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("name", ["username"], {})
@Entity("fa_admin_log", { schema: "fastadmin" })
export class FaAdminLog {
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

  @Column("varchar", {
    name: "username",
    nullable: true,
    comment: "管理员名字",
    length: 30,
  })
  username: string | null;

  @Column("varchar", {
    name: "url",
    nullable: true,
    comment: "操作页面",
    length: 1500,
  })
  url: string | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "日志标题",
    length: 100,
  })
  title: string | null;

  @Column("text", { name: "content", comment: "内容" })
  content: string;

  @Column("varchar", { name: "ip", nullable: true, comment: "IP", length: 50 })
  ip: string | null;

  @Column("varchar", {
    name: "useragent",
    nullable: true,
    comment: "User-Agent",
    length: 255,
  })
  useragent: string | null;

  @Column("int", { name: "createtime", nullable: true, comment: "操作时间" })
  createtime: number | null;
}
