import { activityHistory } from "../src/activityHistory.js";
import { expect } from "chai";

describe("Testing for activityHistory", () => {
  let log;
  before(() => {
    log = [];
  });

  describe("Add items to log", () => {
    it("Simple add one activity", () => {
      expect(
        activityHistory.add(log, "running", 1800, 1, "2022-09-21T08:00:00Z")
          .length
      ).to.equal(1);
    });

    it("Add two consecutive activities", () => {
      log = activityHistory.add(
        activityHistory.add(log, "running", 1800, 1, "2022-09-21T08:00:00Z"),
        "yoga",
        1800,
        1,
        "2022-09-21T10:00:00Z"
      );
      expect(log[0].activity).to.equal("running");
      expect(log[1].activity).to.equal("yoga");
    });

    it("Add two activities out of order", () => {
      log = activityHistory.add(
        activityHistory.add(log, "running", 1800, 1, "2022-09-22T08:00:00Z"),
        "yoga",
        1800,
        1,
        "2022-09-21T05:00:00Z"
      );
      expect(log[1].activity).to.equal("running");
      expect(log[0].activity).to.equal("yoga");
    });
  });
});
