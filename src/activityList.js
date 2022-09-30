export const activityAttrList = {
  badminton: {
    str: 0,
    dex: 1,
    foc: 0,
    vit: 1,
    unit: 2700,
    modifier: [
      { label: "recreation", value: 1 },
      { label: "competition", value: 1.5 },
    ],
  },
  running: {
    str: 1,
    dex: 0,
    foc: 0,
    vit: 2,
    unit: 1800,
    modifier: [
      { label: "easy", value: 1 },
      { label: "speedwork", value: 1.5 },
      { label: "race", value: 2 },
    ],
  },
  reading: {
    str: 0,
    dex: 0,
    foc: 2,
    vit: 0,
    unit: 1800,
    modifier: [
      {
        label: "casual",
        value: 1,
      },
      { label: "technical", value: 1.5 },
    ],
  },
  yoga: {
    str: 1,
    dex: 1,
    foc: 1,
    vit: 0.5,
    unit: 1200,
    modifier: [
      {
        label: "easy",
        value: 1,
      },
      { label: "hard", value: 1.5 },
    ],
  },
  instrument: {
    str: 0,
    dex: 2,
    foc: 1,
    vit: 0,
    unit: 1800,
    modifier: [
      {
        label: "exercises",
        value: 0.5,
      },
      { label: "practice", value: 1 },
      { label: "performance", value: 2 },
    ],
  },
};
