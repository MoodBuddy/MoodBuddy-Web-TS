export type diaryEmotion =
  | "Happiness"
  | "Anger"
  | "Disgust"
  | "Fear"
  | "Neutral"
  | "Sadness"
  | "Surprise";

export const emotions = [
  {
    fullName: "Happiness",
    name: " H",
    value: 12,
    key: "happinessCount",
    color: "#C79A76",
  },
  {
    fullName: "Anger",
    name: " A",
    value: 4,
    key: "angerCount",
    color: "#CE8C98",
  },
  {
    fullName: "Disgust",
    name: " D\u00A0",
    value: 6,
    key: "disgustCount",
    color: "#F08D74",
  },
  {
    fullName: "Fear",
    name: " F\u00A0",
    value: 3,
    key: "fearCount",
    color: "#9C8EBD",
  },
  {
    fullName: "Neutral",
    name: " N\u00A0",
    value: 3,
    key: "neutralCount",
    color: "#9CB57A",
  },
  {
    fullName: "Sadness",
    name: "Sa",
    value: 3,
    key: "sadnessCount",
    color: "#7598BA",
  },
  {
    fullName: "Surprise",
    name: "Su",
    value: 2,
    key: "surpriseCount",
    color: "#E3C778",
  },
];
