import { activityAttrList } from "./activityList.js";
import { rules } from "./rules.js";

export const activityAttributes = {
  activityAttr: activityAttrList,
  getActivities() {
    return Object.keys(this.activityAttr);
  },
  simplify(fullAttributes) {
    return (({ str, dex, foc, vit }) => ({ str, dex, foc, vit }))(
      fullAttributes
    );
  },
  getAttributes(activityName) {
    return this.activityAttr[activityName];
  },
  updateAttributes(existingAttributes, activityName, duration, modifierIndex) {
    return rules.statCap(
      existingAttributes,
      rules.applyMultiplier(
        this.simplify(this.activityAttr[activityName]),
        this.calculateMultiplier(activityName, duration, modifierIndex)
      )
    );
  },
  calculateMultiplier(activityName, duration, modifierIndex) {
    const durationSecs =
      +duration.split(":")[0] * 60 * 60 +
      +duration.split(":")[1] * 60 +
      +duration.split(":")[2];

    return rules.activityCap(
      rules.activityMultiplier(
        durationSecs,
        this.activityAttr[activityName].unit,
        this.activityAttr[activityName].modifier[modifierIndex].value
      )
    );
  },
};
