import { oldVisitorCron } from "./old-visitor-cron";
import { removeOldPasswordCron } from "./remove-old-passwords-cron";
import { removeOldTokenCron } from "./remove-old-token-cron";
import { testCron } from "./test.cron";

export const jobRunner = () => {
  testCron.start();
  removeOldTokenCron.start();
  removeOldPasswordCron.start();
  oldVisitorCron.start();
};
