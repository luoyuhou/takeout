import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fa_game_info_detail", { schema: "fastadmin" })
export class FaGameInfoDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "game_info_id", comment: "游戏记录id" })
  gameInfoId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("tinyint", { name: "rank", comment: "排名", unsigned: true })
  rank: number;

  @Column("tinyint", { name: "time", comment: "耗时", unsigned: true })
  time: number;

  @Column("text", { name: "note", nullable: true, comment: "备注" })
  note: string | null;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;
}
