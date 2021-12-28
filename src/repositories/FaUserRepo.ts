import { EntityRepository, Repository } from "typeorm";
import { FaUser } from "../entities/FaUser";

interface FaUserInsert extends Pick<FaUser, "wxId" | "userId" | "username"> {}
export interface FaUserUpdate extends Pick<FaUser, "id" | "username" | "nickname" | "mobile" | "email" | "bio" | "gender"> { password?: string, salt?: string }

@EntityRepository(FaUser)
export class FaUserRepo extends Repository<FaUser> {
  async createUser(userData: FaUserInsert) {
    return await this.insert([userData]);
  }

  async editProfile(userData: FaUserUpdate) {
    return await this.save(userData);
  }
}