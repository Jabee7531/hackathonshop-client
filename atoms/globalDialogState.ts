import { atom } from "recoil";
import { v1 } from "uuid";

export const globalDialogState = atom({
  key: `globalDialogState/${v1()}`,
  default: {
    title: "",
    message: "",
    isOpen: false,
  },
});
