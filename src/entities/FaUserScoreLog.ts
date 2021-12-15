import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fa_user_score_log", { schema: "fastadmin" })
export class FaUserScoreLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "user_id",
    comment: "会员ID",
    unsigned: true,
    default: () => "'0'",
  })
  userId: number;

  @Column("int", { name: "score", comment: "变更积分", default: () => "'0'" })
  score: number;

  @Column("int", {
    name: "before",
    comment: "变更前积分",
    default: () => "'0'",
  })
  before: number;

  @Column("int", { name: "after", comment: "变更后积分", default: () => "'0'" })
  after: number;

  @Column("varchar", {
    name: "memo",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  memo: string | null;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;
}
