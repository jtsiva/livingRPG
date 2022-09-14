function order(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

export const activityHistory = {
  add(log, activityName, duration, intensityModifier, date) {
    return log
      .concat({
        activity: activityName,
        duration: duration,
        intensity: intensityModifier,
        date: date,
      })
      .slice()
      .sort(order);
  },
};
