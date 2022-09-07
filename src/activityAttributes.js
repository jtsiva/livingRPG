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
    return this.activityAttr[activityName];
  },
};
