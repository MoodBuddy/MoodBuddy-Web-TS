export type diaryEmotion =
  | "HAPPINESS"
  | "ANGER"
  | "DISGUST"
  | "FEAR"
  | "NEUTRAL"
  | "SADNESS"
  | "SURPRISE";

export const emotions = [
  {
    fullName: "HAPPINESS",
    name: " H",
    value: 12,
    key: "happinessCount",
    color: "#C79A76",
  },
  {
    fullName: "ANGER",
    name: " A",
    value: 4,
    key: "angerCount",
    color: "#CE8C98",
  },
  {
    fullName: "DISGUST",
    name: " D\u00A0",
    value: 6,
    key: "disgustCount",
    color: "#F08D74",
  },
  {
    fullName: "FEAR",
    name: " F\u00A0",
    value: 3,
    key: "fearCount",
    color: "#9C8EBD",
  },
  {
    fullName: "NEUTRAL",
    name: " N\u00A0",
    value: 3,
    key: "neutralCount",
    color: "#9CB57A",
  },
  {
    fullName: "SADNESS",
    name: "Sa",
    value: 3,
    key: "sadnessCount",
    color: "#7598BA",
  },
  {
    fullName: "SURPRISE",
    name: "Su",
    value: 2,
    key: "surpriseCount",
    color: "#E3C778",
  },
];
