import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("o_id", ["oId"], { unique: true })
@Entity("fa_order_recharge", { schema: "fastadmin" })
export class FaOrderRecharge {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "o_id",
    unique: true,
    comment: "订单号",
    length: 64,
  })
  oId: string;

  @Column("varchar", {
    name: "recharge_origin",
    comment: "支付账户",
    length: 255,
  })
  rechargeOrigin: string;

  @Column("int", {
    name: "recharge_money",
    comment: "支付金额",
    unsigned: true,
    default: () => "'0'",
  })
  rechargeMoney: number;

  @Column("tinyint", {
    name: "recharge_type",
    comment: "支付方式",
    unsigned: true,
  })
  rechargeType: number;

  @Column("int", { name: "createtime", comment: "支付时间", unsigned: true })
  createtime: number;
}
