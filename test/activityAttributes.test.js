import { activityAttributes } from "../src/activityAttributes.js";
import { expect } from "chai";

describe("activityAttributes.js", function () {
  let myAttr;
  before(function () {
    myAttr = {
      str: 0,
      dex: 0,
      foc: 0,
      vit: 0,
    };
    activityAttributes.activityAttr = {
      running: {
        str: 1,
        dex: 0,
        foc: 0,
        vit: 2,
        unit: 1800,
        modifier: [{ easy: 1 }, { speedwork: 1.5 }, { race: 2 }],
      },
      walking: {
        str: 0,
        dex: 0,
        foc: 0,
        vit: 1,
        unit: 3600,
        modifier: [{ easy: 1 }, { hard: 1.5 }],
      },
      reading: {
        str: 0,
        dex: 0,
        foc: 2,
        vit: 0,
        unit: 1230,
        modifier: [{ casual: 1 }, { technical: 1.5 }],
      },
      yoga: {
        str: 1,
        dex: 1,
        foc: 1,
        vit: 0.5,
        unit: 2700,
        modifier: [{ easy: 1 }, { hard: 1.5 }],
      },
    };
  });

  describe("Test getActivities", function () {
    it("Length of activities", function () {
      expect(activityAttributes.getActivities().length).to.equal(4);
    });
  });

  describe("Test simplify", function () {
    it("Reduce keys to str, dex, foc, vit", function () {
      expect(
        Object.keys(
          activityAttributes.simplify(activityAttributes.activityAttr.running)
        ).length
      ).to.equal(4);
      expect(
        ["str", "dex", "foc", "vit"].every((key) =>
          Object.keys(
            activityAttributes.simplify(activityAttributes.activityAttr.running)
          ).includes(key)
        )
      );
    });
    it("Reduce already reduced", function () {
      expect(
        Object.keys(
          activityAttributes.simplify(
            activityAttributes.simplify(activityAttributes.activityAttr.running)
          )
        ).length
      ).to.equal(4);
      expect(
        ["str", "dex", "foc", "vit"].every((key) =>
          Object.keys(
            activityAttributes.simplify(
              activityAttributes.simplify(
                activityAttributes.activityAttr.running
              )
            )
          ).includes(key)
        )
      );
    });
  });

  describe("Test calculateMultiplier", function () {
    it("0 duration running", function () {
      expect(
        activityAttributes.calculateMultiplier("running", "00:00:00", 0)
      ).to.equal(0);
    });

    it("1.5 unit duration equals modifier=1.5 running", function () {
      expect(
        activityAttributes.calculateMultiplier("running", "00:45:00", 0)
      ).to.equal(
        activityAttributes.calculateMultiplier("running", "00:30:00", 1)
      );
    });

    it("2 unit duration equals modifier=2 running", function () {
      expect(
        activityAttributes.calculateMultiplier("running", "01:00:00", 0)
      ).to.equal(
        activityAttributes.calculateMultiplier("running", "00:30:00", 2)
      );
    });
  });

  describe("Test updateAttributes", function () {
    it("Activity should increase all stats", function () {
      expect(
        activityAttributes.updateAttributes(myAttr, "yoga", "00:45:00", 0).str
      ).to.greaterThan(myAttr.str);
      expect(
        activityAttributes.updateAttributes(myAttr, "yoga", "00:45:00", 0).dex
      ).to.greaterThan(myAttr.dex);
      expect(
        activityAttributes.updateAttributes(myAttr, "yoga", "00:45:00", 0).foc
      ).to.greaterThan(myAttr.foc);
      expect(
        activityAttributes.updateAttributes(myAttr, "yoga", "00:45:00", 0).vit
      ).to.greaterThan(myAttr.vit);
    });
  });
});
