import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("refund_index", ["orderId"], { unique: true })
@Entity("fa_refund", { schema: "fastadmin" })
export class FaRefund {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", comment: "用户", unsigned: true })
  userId: number;

  @Column("varchar", {
    name: "order_id",
    unique: true,
    comment: "订单号",
    length: 32,
  })
  orderId: string;

  @Column("tinyint", {
    name: "state",
    comment: "订单状态",
    default: () => "'0'",
  })
  state: number;

  @Column("int", { name: "money", comment: "退款金额", unsigned: true })
  money: number;

  @Column("varchar", { name: "receiver", comment: "收款账号", length: 128 })
  receiver: string;

  @Column("text", { name: "note", nullable: true, comment: "备注" })
  note: string | null;

  @Column("int", { name: "createtime", nullable: true, comment: "申请时间" })
  createtime: number | null;

  @Column("int", { name: "finishtime", nullable: true, comment: "完成时间" })
  finishtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;

  @Column("int", { name: "deletetime", nullable: true, comment: "删除时间" })
  deletetime: number | null;
}
