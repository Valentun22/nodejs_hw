import { CronJob } from "cron";

const handler = () => {
  console.log("running cron job");
};
export const testCron = new CronJob("*/5 * * 8 * *", handler);
