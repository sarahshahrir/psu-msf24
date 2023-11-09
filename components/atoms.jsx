import { atom } from "recoil";

export const sportState = atom({
  key: "sportState", // unique ID (with respect to other atoms/selectors)
  default: "Football", // default value (aka initial value)
});
