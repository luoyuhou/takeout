const fetch = require("isomorphic-fetch");
import logger from "../logger";

class MeituanClient {
  private readonly baseUrl = process.env.MEITUANURL;

  public async checkOrderStatus(orderId: string) {
    const url = this.baseUrl + "/waimai/order/delivered";
    const response = await fetch(url, { method: "POST", headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }, body: JSON.stringify({
      orderId
    }) });
    const responseText = await response.text();
    logger.info("responseText", responseText);
    return responseText;
  }
}

export default new MeituanClient();