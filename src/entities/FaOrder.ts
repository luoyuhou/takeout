import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_index", ["orderId"], { unique: true })
@Entity("fa_order", { schema: "fastadmin" })
export class FaOrder {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", comment: "用户", unsigned: true })
  userId: number;

  @Column("varchar", {
    name: "order_id",
    unique: true,
    comment: "订单号",
    length: 64,
  })
  orderId: string;

  @Column("tinyint", {
    name: "state",
    comment: "订单状态",
    default: () => "'0'",
  })
  state: number;

  @Column("int", { name: "amount", comment: "所得金额", unsigned: true })
  amount: number;

  @Column("int", { name: "price", comment: "标价", unsigned: true })
  price: number;

  @Column("int", { name: "money", comment: "充值金额", unsigned: true })
  money: number;

  @Column("smallint", {
    name: "discount",
    comment: "折扣",
    unsigned: true,
    default: () => "'0'",
  })
  discount: number;

  @Column("tinyint", {
    name: "is_delete",
    comment: "是否删除",
    unsigned: true,
    default: () => "'0'",
  })
  isDelete: number;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;

  @Column("int", { name: "finishtime", nullable: true, comment: "完成时间" })
  finishtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;

  @Column("int", { name: "deletetime", nullable: true, comment: "删除时间" })
  deletetime: number | null;
}
