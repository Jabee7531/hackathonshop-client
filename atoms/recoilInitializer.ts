import { userStorage } from "../lib/storage/Storage";
import { userState } from "./authState";

export default function recoilInitializer({ set }: any) {
  if (typeof window !== "undefined") {
    const user = userStorage.get();
    if (user) {
      set(userState, user);
    }
  }
}
