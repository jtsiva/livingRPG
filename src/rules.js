export const rules = {
  statCap() {
    //takes a set of stats and a desired addition and
    //calculates and returns final updated stats
    //adjusted with a stat cap of 100 (exp decay)
  },
  activityCap() {
    //diminishing returns for a given activity over time
    //max out the multiplier
  },
  //TODO: add time / intensity multiplier here?
  activityMultiplier() {
    //take the duration, the unit duration, and intensity multiplier and return
  },
  applyMultiplier(attributes, multiplier) {
    //apply the given multiplier and return stats
    return objectMap(attributes, (value) => value * multiplier);
  },
};

const objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(function ([key, value], i) {
      return [key, fn(value, key, i)];
    })
  );
