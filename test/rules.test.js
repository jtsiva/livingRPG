import { rules } from "../src/rules.js";
import { expect } from "chai";

describe("rules.js", function () {
  let myAttr;
  beforeEach(function () {
    myAttr = {
      str: 1,
      dex: 1,
      foc: 1,
      vit: 1,
    };

    //for testing the functionality of the rules without
    //enforcing a particular rule implementation
    rules.maxStat = 100;
    rules.maxMultiplier = 5;
    rules.progressionModifier = 100;
  });

  describe("Testing duration multiplier", function () {
    it("Identity test", function () {
      expect(rules.activityMultiplier(10, 10, 1)).to.equal(1);
    });

    it("Simple modifier *2", function () {
      expect(rules.activityMultiplier(10, 10, 2)).to.equal(2);
    });

    it("Modifier * maxMultiplier", function () {
      expect(rules.activityMultiplier(10, 10, rules.maxMultiplier)).to.equal(
        rules.maxMultiplier
      );
    });

    it("Duration half time", function () {
      expect(rules.activityMultiplier(5, 10, 1)).to.equal(0.5);
    });

    it("Duration double time", function () {
      expect(rules.activityMultiplier(20, 10, 1)).to.equal(2);
    });
  });

  describe("Testing multiplier cap", function () {
    it("At max multiplier", function () {
      expect(rules.activityCap(rules.maxMultiplier)).to.lessThan(
        rules.maxMultiplier
      );
    });

    it("Double multiplier", function () {
      expect(rules.activityCap(2 * rules.maxMultiplier)).to.lessThan(
        rules.maxMultiplier
      );
    });
  });

  describe("Testing applyMultiplier", function () {
    it("Double stats", function () {
      expect(rules.applyMultiplier(myAttr, 2).str).to.equal(2);
      expect(rules.applyMultiplier(myAttr, 2).dex).to.equal(2);
      expect(rules.applyMultiplier(myAttr, 2).foc).to.equal(2);
      expect(rules.applyMultiplier(myAttr, 2).vit).to.equal(2);
    });

    it("Half stats", function () {
      expect(rules.applyMultiplier(myAttr, 0.5).str).to.equal(0.5);
      expect(rules.applyMultiplier(myAttr, 0.5).dex).to.equal(0.5);
      expect(rules.applyMultiplier(myAttr, 0.5).foc).to.equal(0.5);
      expect(rules.applyMultiplier(myAttr, 0.5).vit).to.equal(0.5);
    });
  });

  describe("Testing statCap", function () {
    it("Identity test", function () {
      expect(
        rules.statCap(myAttr, { str: 0, dex: 0, foc: 0, vit: 0 }).str
      ).to.equal(myAttr.str);
      expect(
        rules.statCap(myAttr, { str: 0, dex: 0, foc: 0, vit: 0 }).dex
      ).to.equal(myAttr.dex);
      expect(
        rules.statCap(myAttr, { str: 0, dex: 0, foc: 0, vit: 0 }).foc
      ).to.equal(myAttr.foc);
      expect(
        rules.statCap(myAttr, { str: 0, dex: 0, foc: 0, vit: 0 }).vit
      ).to.equal(myAttr.vit);
    });

    it("Capped out", function () {
      expect(
        rules.statCap(myAttr, {
          str: rules.maxStat,
          dex: rules.maxStat,
          foc: rules.maxStat,
          vit: rules.maxStat,
        }).str
      ).to.lessThan(rules.maxStat);
      expect(
        rules.statCap(myAttr, {
          str: rules.maxStat,
          dex: rules.maxStat,
          foc: rules.maxStat,
          vit: rules.maxStat,
        }).dex
      ).to.lessThan(rules.maxStat);
      expect(
        rules.statCap(myAttr, {
          str: rules.maxStat,
          dex: rules.maxStat,
          foc: rules.maxStat,
          vit: rules.maxStat,
        }).foc
      ).to.lessThan(rules.maxStat);
      expect(
        rules.statCap(myAttr, {
          str: rules.maxStat,
          dex: rules.maxStat,
          foc: rules.maxStat,
          vit: rules.maxStat,
        }).vit
      ).to.lessThan(rules.maxStat);
    });
  });
});
