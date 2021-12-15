import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid_group_id", ["uid", "groupId"], { unique: true })
@Index("uid", ["uid"], {})
@Index("group_id", ["groupId"], {})
@Entity("fa_auth_group_access", { schema: "fastadmin" })
export class FaAuthGroupAccess {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "uid", comment: "会员ID", unsigned: true })
  uid: number;

  @Column("int", { name: "group_id", comment: "级别ID", unsigned: true })
  groupId: number;
}
