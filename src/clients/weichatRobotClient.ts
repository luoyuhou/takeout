import config from "../config/config";
import _fetch from "./index";
import logger from "../logger";
import { FaUser } from "../entities/FaUser";
import redisCli from "./redisCli";

interface userInterface extends Pick<FaUser, "username" | "wxId" | "avatar"> {}

type ENV = "online" | "debug"

interface ChatBody {
  signature: string;
  query: string;
  env?: ENV;
  first_priority_skills?: string[];
  second_priority_skills?: string[];
}

class WeichatRobotClient {
  private readonly baseUrl = "https://openai.weixin.qq.com/openapi";
  private readonly token = config.WEICHAT_TOKEN;
  private readonly env: ENV = config.WEICHAT_ENV ? "debug": "online"

  private async signature(user: userInterface): Promise<string> {
    try {
      const sign = await redisCli.get(user.wxId);

      if (sign) {
        return sign;
      }
      const url = this.baseUrl + "/sign/" + this.token;
      const params = {
        username: user.username,
        userid: user.wxId,
        avatar: user.avatar || "https://res.wx.qq.com/a/wx_fed/weixin_portal/res/static/img/1L3ryyg.png",
      };

      const res = await _fetch(url, { method: "POST",headers: {
        "Content-Type": "application/json;charset=utf-8"
      }, body: JSON.stringify(params) });
      await redisCli.set(user.wxId, res.signature);
      await redisCli.expire(user.wxId, res.expiresIn);
      return res.signature;
    } catch (e) {
      logger.error("signature Error: " + e);
      throw e;
    }
  }

  async chat(user: userInterface, message: string) {
    const url = `${this.baseUrl}/aibot/${this.token}`;
    try {
      const signature = await this.signature(user);
      const body: ChatBody = {
        signature,
        query: message,
        first_priority_skills: ["red", "blue", "green"],
        env: this.env
      };
      return await _fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(body)
      });
    } catch (e) {
      logger.error("Chat Error: " + e);
      throw e;
    }
  }
}

export default new WeichatRobotClient();