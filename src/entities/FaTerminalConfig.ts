import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("terminal_config_index", ["tId"], { unique: true })
@Entity("fa_terminal_config", { schema: "fastadmin" })
export class FaTerminalConfig {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "t_id",
    unique: true,
    comment: "设备id",
    unsigned: true,
  })
  tId: number;

  @Column("varchar", {
    name: "video_url",
    nullable: true,
    comment: "视频地址",
    length: 255,
  })
  videoUrl: string | null;

  @Column("text", { name: "text", nullable: true, comment: "描述" })
  text: string | null;

  @Column("text", {
    name: "btn_config_package",
    nullable: true,
    comment: "按键配置",
  })
  btnConfigPackage: string | null;

  @Column("text", { name: "extend", nullable: true, comment: "其他" })
  extend: string | null;
}
