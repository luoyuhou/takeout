import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fa_test", { schema: "fastadmin" })
export class FaTest {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "ID",
    unsigned: true,
  })
  id: number;

  @Column("int", {
    name: "admin_id",
    comment: "管理员ID",
    default: () => "'0'",
  })
  adminId: number;

  @Column("int", {
    name: "category_id",
    comment: "分类ID(单选)",
    unsigned: true,
    default: () => "'0'",
  })
  categoryId: number;

  @Column("varchar", {
    name: "category_ids",
    comment: "分类ID(多选)",
    length: 100,
  })
  categoryIds: string;

  @Column("enum", {
    name: "week",
    comment: "星期(单选):monday=星期一,tuesday=星期二,wednesday=星期三",
    enum: ["monday", "tuesday", "wednesday"],
  })
  week: "monday" | "tuesday" | "wednesday";

  @Column("set", {
    name: "flag",
    nullable: true,
    comment: "标志(多选):hot=热门,index=首页,recommend=推荐",
    enum: ["hot", "index", "recommend"],
  })
  flag: ("hot" | "index" | "recommend")[] | null;

  @Column("enum", {
    name: "genderdata",
    comment: "性别(单选):male=男,female=女",
    enum: ["male", "female"],
    default: () => "'male'",
  })
  genderdata: "male" | "female";

  @Column("set", {
    name: "hobbydata",
    comment: "爱好(多选):music=音乐,reading=读书,swimming=游泳",
    enum: ["music", "reading", "swimming"],
  })
  hobbydata: ("music" | "reading" | "swimming")[];

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "标题",
    length: 50,
  })
  title: string | null;

  @Column("text", { name: "content", comment: "内容" })
  content: string;

  @Column("varchar", {
    name: "image",
    nullable: true,
    comment: "图片",
    length: 100,
  })
  image: string | null;

  @Column("varchar", {
    name: "images",
    nullable: true,
    comment: "图片组",
    length: 1500,
  })
  images: string | null;

  @Column("varchar", {
    name: "attachfile",
    nullable: true,
    comment: "附件",
    length: 100,
  })
  attachfile: string | null;

  @Column("varchar", {
    name: "keywords",
    nullable: true,
    comment: "关键字",
    length: 100,
  })
  keywords: string | null;

  @Column("varchar", {
    name: "description",
    nullable: true,
    comment: "描述",
    length: 255,
  })
  description: string | null;

  @Column("varchar", {
    name: "city",
    nullable: true,
    comment: "省市",
    length: 100,
  })
  city: string | null;

  @Column("varchar", {
    name: "json",
    nullable: true,
    comment: "配置:key=名称,value=值",
    length: 255,
  })
  json: string | null;

  @Column("float", {
    name: "price",
    comment: "价格",
    unsigned: true,
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  price: number;

  @Column("int", {
    name: "views",
    comment: "点击",
    unsigned: true,
    default: () => "'0'",
  })
  views: number;

  @Column("date", { name: "startdate", nullable: true, comment: "开始日期" })
  startdate: string | null;

  @Column("datetime", {
    name: "activitytime",
    nullable: true,
    comment: "活动时间(datetime)",
  })
  activitytime: Date | null;

  @Column("year", { name: "year", nullable: true, comment: "年" })
  year: number | null;

  @Column("time", { name: "times", nullable: true, comment: "时间" })
  times: string | null;

  @Column("int", {
    name: "refreshtime",
    nullable: true,
    comment: "刷新时间(int)",
  })
  refreshtime: number | null;

  @Column("int", { name: "createtime", nullable: true, comment: "创建时间" })
  createtime: number | null;

  @Column("int", { name: "updatetime", nullable: true, comment: "更新时间" })
  updatetime: number | null;

  @Column("int", { name: "deletetime", nullable: true, comment: "删除时间" })
  deletetime: number | null;

  @Column("int", { name: "weigh", comment: "权重", default: () => "'0'" })
  weigh: number;

  @Column("tinyint", {
    name: "switch",
    comment: "开关",
    width: 1,
    default: () => "'0'",
  })
  switch: boolean;

  @Column("enum", {
    name: "status",
    comment: "状态",
    enum: ["normal", "hidden"],
    default: () => "'normal'",
  })
  status: "normal" | "hidden";

  @Column("enum", {
    name: "state",
    comment: "状态值:0=禁用,1=正常,2=推荐",
    enum: ["0", "1", "2"],
    default: () => "'1'",
  })
  state: "0" | "1" | "2";
}
