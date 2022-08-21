import { atom } from "recoil";
import { v1 } from "uuid";
import { User } from "../interface/interfaces";

export const googleTokenState = atom<string | null>({
  key: `googleTokenState/${v1()}`,
  default: null,
});

export const userState = atom<User | null>({
  key: `userState/${v1()}`,
  default: null,
});
