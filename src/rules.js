export const rules = {
  maxStat: 100,
  maxMultiplier: 6,
  statCap(existingAttributes, newAttributes) {
    //takes a set of stats and a desired addition and
    //calculates and returns final updated stats
    //adjusted with a stat cap of 100 (asymptotic)
    return Object.fromEntries(
      Object.entries(existingAttributes).map(function ([key, value], i) {
        return [
          key,
          (this.maxStat * value + this.maxStat * newAttributes[key]) /
            (value + newAttributes[key] + 1),
        ];
      })
    );
  },
  activityCap(multiplier) {
    //diminishing returns for a given activity over time
    //max out the multiplier
    return (this.maxMultiplier * multiplier) / (multiplier + 1);
  },
  activityMultiplier(activityDuration, unitDuration, modifier) {
    //take the duration (seconds), the unit duration (seconds), and intensity multiplier and return

    return (activityDuration / unitDuration) * modifier;
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
