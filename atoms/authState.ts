import { atom } from "recoil";
import { User } from "../interface/interfaces";

export const googleTokenState = atom<string | null>({
  key: "googleTokenState",
  default: null,
});

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
