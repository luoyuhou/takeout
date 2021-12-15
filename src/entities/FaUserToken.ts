import { Column, Entity } from "typeorm";

@Entity("fa_user_token", { schema: "fastadmin" })
export class FaUserToken {
  @Column("varchar", {
    primary: true,
    name: "token",
    comment: "Token",
    length: 50,
  })
  token: string;

  @Column("int", {
    name: "user_id",
    comment: "会员ID",
    unsigned: true,
    default: () => "'0'",
  })
  userId: number;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;

  @Column("int", { name: "expiretime", nullable: true, comment: "过期时间" })
  expiretime: number | null;
}
