import { activityAttrList } from "./activityList.js";
import { rules } from "./rules.js";

export const activityAttributes = {
  activityAttr: activityAttrList,
  getActivities() {
    return [];
  },
  simplify(fullAttributes) {
    return (({ str, dex, foc, vit }) => ({ str, dex, foc, vit }))(
      fullAttributes
    );
  },
  getAttributes(activityName) {
    return this.activityAttr[activityName];
  },
  getAdjustedAttributes(activityName, multiplier) {
    return activityName in this.activityAttr
      ? rules.applyMultiplier(
          this.simplify(this.activityAttr[activityName]),
          multiplier
        )
      : undefined;
  },
  calculateMultiplier(activityName, duration, modifierIndex) {
    const durationSecs =
      +activityDuration.split(":")[0] * 60 * 60 +
      +activityDuration.split(":")[1] * 60 +
      +activityDuration.split(":")[2];

    return rules.activityCap(
      rules.activityMultiplier(
        durationSecs,
        this.activityAttr[activityName].unit,
        activityAttr[activityName].modifier[modifierIndex]
      )
    );
  },
};
