import { activityAttributes } from "../src/activityAttributes.js";
import { expect } from "chai";

describe("Rules and activity balancing", function () {
  let myAttr;
  before(function () {});

  beforeEach(function () {
    myAttr = {
      str: 0,
      dex: 0,
      foc: 0,
      vit: 0,
    };
  });

  describe("Check that activities are balanced", function () {
    //Each stat should be well-represented across the
    //activities. Sum of each (str, dex, foc, vit) across
    //all activities should be roughly equal
    //(<10% from others)
    //100 hours of each activity (applied at unit duration)
    //should put stats within the same general area
    //(+/- 10% of average).. highest stat value maybe?
  });

  describe("Check for stat cap reasonableness", function () {
    //Getting to 95 for any stat should be *hard* and take
    //quite a while. Should take ~1.5k hours (2 hrs a day
    // for 2 years)
  });

  describe("Check multiplier cap reasonableness", function () {
    //Want the diminishing returns to prevent binging, but
    //not be too much of a deterrent. Reaching multiplier of
    //max - 1 should take about the same amount of time for
    //each activity (+/- 10% for lowest and highest
    //intensity modifiers)
  });
});
