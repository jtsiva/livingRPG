import { activityAttributes } from "../src/activityAttributes.js";
import { expect } from "chai";

describe("activityAttributes.js", function () {
  before(function () {
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

  describe("Test getAttributes", function () {
    it("Get attribute information for an activity (running)", function () {
      expect(activityAttributes.getAttributes("running").str).to.equal(1);
      expect(activityAttributes.getAttributes("running").dex).to.equal(0);
      expect(activityAttributes.getAttributes("running").foc).to.equal(0);
      expect(activityAttributes.getAttributes("running").vit).to.equal(2);
    });
    it("Get nonexistent activity", function () {
      expect(activityAttributes.getAttributes("swashbuckling")).to.equal(
        undefined
      );
    });
  });

  describe("Test adjustAttributes", function () {
    it("Get attributes for running", function () {
      expect(activityAttributes.adjustAttributes("running", 1).str).to.equal(1);
      expect(activityAttributes.adjustAttributes("running", 1).dex).to.equal(0);
      expect(activityAttributes.adjustAttributes("running", 1).foc).to.equal(0);
      expect(activityAttributes.adjustAttributes("running", 1).vit).to.equal(2);
    });
  });

  // describe("Test normalizeActivityUnit", function () {
  //   it("Normalize 30 min time unit to 1", function () {
  //     expect(
  //       activityAttributes.normalizeActivityUnit("running", "00:30:00", "easy")
  //     ).to.equal(1);
  //   });
  // });
});
