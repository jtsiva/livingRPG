import { activityAttrList } from "./activityList.js";

const objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(function ([key, value], i) {
      return key != "unit" ? [key, fn(value, key, i)] : [key, value];
    })
  );

export function getAttributes(activityName, normalizedUnit) {
  return objectMap(
    activityAttrList[activityName],
    (value) => value * normalizedUnit
  );
}

export function normalizeActivityUnit(activityName, unit) {}

// module.exports = { getAttributes, normalizeActivityUnit };
