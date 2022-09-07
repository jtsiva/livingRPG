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
  getAdjustedAttributes(activityName, normalizedUnit) {
    return activityName in this.activityAttr
      ? rules.applyMultiplier()
      : undefined;
  },
  normalizeActivityUnit(activityName, duration, modifier) {
    const durationSecs =
      +duration.split(":")[0] * 60 * 60 +
      +duration.split(":")[1] * 60 +
      +duration.split(":")[2];
    const unitParts = this.activityAttr[activityName].unit.split(":");
    const unitSecs =
      +unitParts[0] * 60 * 60 + +unitParts[1] * 60 + +unitParts[2];
    return (
      (durationSecs / unitSecs) *
      this.activityAttr[activityName].modifier[modifier]
    );
  },
};
