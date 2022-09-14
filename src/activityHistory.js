export const activityHistory = {
  add(log, activityName, duration, intensityModifier) {
    return log.concat({
      activity: activityName,
      duration: duration,
      intensity: intensityModifier,
    });
  },
};
