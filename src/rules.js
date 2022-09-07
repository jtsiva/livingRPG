export const rules = {
  statCap(existingAttributes, newAttributes) {
    //takes a set of stats and a desired addition and
    //calculates and returns final updated stats
    //adjusted with a stat cap of 100 (asymptotic)
    return Object.fromEntries(
      Object.entries(existingAttributes).map(function ([key, value], i) {
        return [
          key,
          (100 * value + 100 * newAttributes[key]) /
            (value + newAttributes[key] + 1),
        ];
      })
    );

    //The easy way is only store x and alway calculate the adjusted value
    //otherwise, store y and add and adjust ***^^^^***
  },
  activityCap(multiplier) {
    //diminishing returns for a given activity over time
    //max out the multiplier
    return (6 * multiplier) / (multiplier + 1);
  },
  activityMultiplier(activityDuration, unitDuration, modifier) {
    //take the duration (seconds), the unit duration (seconds), and intensity multiplier and return

    return (durationSecs / unitSecs) * modifier;
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
