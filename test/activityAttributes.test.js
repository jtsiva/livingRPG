import { activityAttributes } from "../src/activityAttributes.js";
import { expect } from "chai";

describe("hooks", function () {
  before(function () {
    activityAttributes.activityAttr = {
      running: {
        str: 1,
        dex: 0,
        foc: 0,
        vit: 2,
        unit: "00:30:00",
        modifier: {
          easy: 1,
          speedwork: 1.5,
          race: 2,
        },
      },
      walking: {
        str: 0,
        dex: 0,
        foc: 0,
        vit: 1,
        unit: "01:00:00",
        modifier: {
          easy: 1,
          speedwork: 1.5,
          race: 2,
        },
      },
      reading: {
        str: 0,
        dex: 0,
        foc: 2,
        vit: 0,
        unit: "00:20:30",
        modifier: {
          casual: 1,
          technical: 1.5,
        },
      },
      yoga: {
        str: 1,
        dex: 1,
        foc: 1,
        vit: 0.5,
        unit: "00:45:00",
        modifier: {
          easy: 1,
          hard: 1.5,
        },
      },
    };
  });

  describe("Test getAttributes", function () {
    it("Get attribute information for an activity (running)", function () {
      expect(activityAttributes.getAttributes("running").str).to.equal(1);
      expect(activityAttributes.getAttributes("running").dex).to.equal(0);
      expect(activityAttributes.getAttributes("running").foc).to.equal(0);
      expect(activityAttributes.getAttributes("running").vit).to.equal(2);
    });
  });

  describe("Test getAdjustedAttributes", function () {
    it("Get attributes for running", function () {
      expect(
        activityAttributes.getAdjustedAttributes("running", 1).str
      ).to.equal(1);
      expect(
        activityAttributes.getAdjustedAttributes("running", 1).dex
      ).to.equal(0);
      expect(
        activityAttributes.getAdjustedAttributes("running", 1).foc
      ).to.equal(0);
      expect(
        activityAttributes.getAdjustedAttributes("running", 1).vit
      ).to.equal(2);
    });

    it("Get attributes for running with unit=2", function () {
      expect(
        activityAttributes.getAdjustedAttributes("running", 2).str
      ).to.equal(2);
      expect(
        activityAttributes.getAdjustedAttributes("running", 2).dex
      ).to.equal(0);
      expect(
        activityAttributes.getAdjustedAttributes("running", 2).foc
      ).to.equal(0);
      expect(
        activityAttributes.getAdjustedAttributes("running", 2).vit
      ).to.equal(4);
    });

    it("Get attributes for running with unit=.5", function () {
      expect(
        activityAttributes.getAdjustedAttributes("running", 0.5).str
      ).to.equal(0.5);
      expect(
        activityAttributes.getAdjustedAttributes("running", 0.5).dex
      ).to.equal(0);
      expect(
        activityAttributes.getAdjustedAttributes("running", 0.5).foc
      ).to.equal(0);
      expect(
        activityAttributes.getAdjustedAttributes("running", 0.5).vit
      ).to.equal(1);
    });

    it("Get nonexistent activity", function () {
      expect(
        activityAttributes.getAdjustedAttributes("swashbuckling", 1)
      ).to.equal(undefined);
    });
  });

  describe("Test normalizeActivityUnit", function () {
    it("Normalize 30 min time unit to 1", function () {
      expect(
        activityAttributes.normalizeActivityUnit("running", "00:30:00", "easy")
      ).to.equal(1);
    });
  });
});
