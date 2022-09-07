import { activityAttrList } from "./activityList.js";

export function getAttributes(activityName, normalizedUnit) {
  return activityAttrList[activityName];
}

export function normalizeActivityUnit(activityName, unit) {}

// module.exports = { getAttributes, normalizeActivityUnit };
