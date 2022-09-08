import { rules } from "../src/rules.js";
import { expect } from "chai";

describe("rules.js", function () {
  beforeEach(function () {
    const myAttr = {
      str: 1,
      dex: 1,
      foc: 1,
      vit: 1,
    };

    //for testing the functionality of the rules without
    //enforcing a particular rule implementation
    rules.maxStat = 100;
    rules.maxMultiplier = 5;
  });

  describe("Testing duration multiplier", function () {
    it("Identity test", function () {
      expect(rules.activityMultiplier(10, 10, 1)).to.equal(1);
    });
  });
});
