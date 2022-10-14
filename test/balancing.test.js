import { activityAttributes } from "../src/activityAttributes.js";
import { activityAttrList } from "../src/activityList.js";
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

  const simpleAttrAdd = function (existingAttributes, newAttributes) {
    return Object.fromEntries(
      Object.entries(existingAttributes).map(function ([key, value], i) {
        return [key, value + newAttributes[key]];
      })
    );
  };

  describe("Check that activities are balanced", function () {
    it("Even representation of stats", function () {
      //Each stat should be well-represented across the
      //activities. Sum of each (str, dex, foc, vit) across
      //all activities should be roughly equal
      //(<10% from average of all)

      Object.entries(activityAttrList).map(function (
        [activityName, activityAttr],
        i
      ) {
        myAttr = simpleAttrAdd(
          myAttr,
          activityAttributes.simplify(activityAttr)
        );
        // console.log(obj);
        return myAttr;
      });

      //No reason to get nit-picky with decimals
      const avg = Math.round(
        Object.entries(myAttr).reduce((sum, attr) => sum + attr[1], 0) /
          Object.keys(myAttr).length
      );

      const bound = Math.ceil(0.1 * avg);

      Object.entries(myAttr).forEach(function (entry) {
        try {
          expect(entry[1]).to.lte(avg + bound);
        } catch (e) {
          e.message = `${entry[0]} is too high`;
          throw e;
        }

        try {
          expect(entry[1]).to.gte(avg - bound);
        } catch (e) {
          e.message = `${entry[0]} is too low`;
          throw e;
        }
      });
    });

    //100 applications of unit duration for each activity
    //should put stats within the same general area
    //(+/- 10% of average).. highest stat value maybe?
    it("Balanced activities at low intensity", function () {
      //for each activity, add at unit duration and low intensity
      //x100, check that highest stat point is close to other activity's max
      //e.g. act1 * 100 => str : 100 , act2 * 100 => dex :98 is good
      //act1 * 100 => str : 100 , act2 * 100 => dex :50 is not great
      //display outlier activities
    });
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
