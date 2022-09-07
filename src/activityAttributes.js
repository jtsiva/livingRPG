import { activityAttrList } from "./activityList.js";

const objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(function ([key, value], i) {
      return key != "unit" ? [key, fn(value, key, i)] : [key, value];
    })
  );

export const activityAttributes = {
  activityAttr: activityAttrList,
  getActivities() {
    return [];
  },
  getAttributes(activityName) {
    return this.activityAttr[activityName];
  },
  getAdjustedAttributes(activityName, normalizedUnit) {
    return activityName in this.activityAttr
      ? objectMap(
          this.activityAttr[activityName],
          (value) => value * normalizedUnit
        )
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
