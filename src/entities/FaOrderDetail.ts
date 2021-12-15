import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("order_detail_index", ["oId"], { unique: true })
@Entity("fa_order_detail", { schema: "fastadmin" })
export class FaOrderDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "o_id",
    unique: true,
    comment: "订单ID",
    length: 64,
  })
  oId: string;

  @Column("int", {
    name: "event",
    comment: "活动",
    unsigned: true,
    default: () => "'0'",
  })
  event: number;

  @Column("varchar", {
    name: "coupon",
    nullable: true,
    comment: "使用卡券",
    length: 255,
  })
  coupon: string | null;

  @Column("int", {
    name: "additional",
    comment: "额外赠送",
    unsigned: true,
    default: () => "'0'",
  })
  additional: number;

  @Column("varchar", {
    name: "description",
    nullable: true,
    comment: "说明",
    length: 255,
  })
  description: string | null;
}
