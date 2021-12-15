import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fa_game_info", { schema: "fastadmin" })
export class FaGameInfo {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "game_type", comment: "游戏模式" })
  gameType: number;

  @Column("varchar", { name: "game_name", comment: "游戏名称", length: 16 })
  gameName: string;

  @Column("tinyint", { name: "people", comment: "参数人数", unsigned: true })
  people: number;

  @Column("tinyint", { name: "game_time", comment: "游戏时间", unsigned: true })
  gameTime: number;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;
}
