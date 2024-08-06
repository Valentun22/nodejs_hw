import { CronJob } from "cron";

import { timeHelper } from "../helpers/time.helper";
import { oldPasswordRepository } from "../repositories/old-password.repository";

const handler = async () => {
  try {
    console.log("[removeOldPasswordCron] Cron is running");

    await oldPasswordRepository.deleteByParams({
      createdAt: { $lte: timeHelper.subtractByParams(90, "day") },
    });
    console.log("[removeOldPasswordCron] Cron is finished");
  } catch (error) {
    console.error("[removeOldPasswordCron] Cron failed", error);
  }
};
export const removeOldPasswordCron = new CronJob("0 * * * * *", handler);
