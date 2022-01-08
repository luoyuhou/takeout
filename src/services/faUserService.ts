import { getCustomRepository } from "typeorm";
import { FaUserRepo, FaUserUpdate } from "../repositories/FaUserRepo";
import { v4 } from "uuid";
import bcrypt from "bcryptjs";

class FaUserService {
  private bcryptPassword(password: string): { pwd: string, salt: string } {
    const salt = bcrypt.genSaltSync(10);
    const pwd = bcrypt.hashSync(password, salt);
    return { pwd, salt };
  }

  async createUser (params: { wxId: string; joinip: string }) {
    const userId = `user${v4()}`;
    return getCustomRepository(FaUserRepo).createUser({ ...params, userId, username: userId, nickname: userId, status: "normal", jointime: Math.round(new Date().getTime() / 1000) });
  }

  async editProfile(id: number, params: Record<string, any>) {
    const userInfo: FaUserUpdate = {
      id,
      username: params["username"],
      nickname: params["nickname"],
      mobile: params["mobile"],
      email: params["email"],
      bio: params["bio"],
      gender: params["gender"]
    };

    if (params.password) {
      const user = await getCustomRepository(FaUserRepo).findOne({id});
      if (!user) {
        throw new Error("The User done not exist!");
      }
      if (bcrypt.hashSync(params.password, user.salt as string) === userInfo.password) {
        throw new Error("Password Unchanging");
      }
      const { pwd, salt} = this.bcryptPassword(params["password"]);
      userInfo["password"] = pwd;
      userInfo["salt"] = salt;
    }

    return await getCustomRepository(FaUserRepo).editProfile(userInfo);
  }

  async resetPassword(data: { wxId?: string, userId?: string, password: string }) {
    const user = await getCustomRepository(FaUserRepo).createQueryBuilder().where({ wxId: data.wxId })
      .orWhere({ userId: data.userId })
      .getOne();
    if (!user) {
      throw new Error("User does not exist");
    }
    const { pwd, salt } = this.bcryptPassword(data.password);
    return await getCustomRepository(FaUserRepo).save({ id: user.id, salt, password: pwd });
  }
}

export default new FaUserService();