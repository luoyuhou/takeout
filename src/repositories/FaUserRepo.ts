import { EntityRepository, Repository } from "typeorm";
import { FaUser } from "../entities/FaUser";
import moment from "moment";

interface FaUserInsert extends Pick<FaUser, "wxId" | "userId" | "username"| "nickname"| "status" | "joinip" | "jointime"> {}
export interface FaUserUpdate extends Pick<FaUser, "id" | "username" | "nickname" | "mobile" | "email" | "bio" | "gender"> { password?: string, salt?: string }

@EntityRepository(FaUser)
export class FaUserRepo extends Repository<FaUser> {
  async createUser(userData: FaUserInsert) {
    return await this.insert([{ ...userData, createtime: userData.jointime}]);
  }

  private async login(user: FaUser): Promise<FaUser | undefined> {
    const now = Math.round(Date.now() / 1000);
    const lastActionTime = user.logintime;
    user.logintime = now;
    if (moment(now * 1000).diff(user.logintime * 1000, "days") === 1) {
      user.successions += 1;
    } else {
      user.successions = 1;
    }
    if (!user.maxsuccessions) {
      user.maxsuccessions = 1;
    }
    if (user.successions > (user.maxsuccessions || 0)) {
      user.maxsuccessions = user.successions;
    }
    const res = await this.update({ id: user.id }, { loginip: user.loginip, logintime: user.logintime, successions: user.successions, maxsuccessions: user.maxsuccessions, prevtime: lastActionTime, updatetime: now });
    return res && user || undefined;
  }

  async weixinLogin(wxId: string, loginip: string): Promise<FaUser | undefined> {
    const user = await this.findOne({ wxId, status: "normal" });
    if (!user) {
      throw new Error("This user does not exist!");
    }
    user.loginip = loginip;
    return this.login(user);
  }

  async editProfile(userData: FaUserUpdate) {
    return await this.save({ ...userData, updatetime: Math.round(Date.now() / 1000)});
  }
}