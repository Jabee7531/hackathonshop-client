import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/authState";
import { User } from "../interface/interfaces";
import { googleLogout } from "../lib/api/auth/googleLogout";
import { userStorage } from "../lib/storage/Storage";

export default function useAuth() {
  const setUserSate = useSetRecoilState(userState);
  const authorize = (user: User, jwt: string) => {
    setUserSate(user);
    userStorage.set(jwt);
  };
  const logout = async () => {
    try {
      const auth2 = (window as any).gapi?.auth2.getAuthInstance();
      auth2.signOut();
      await googleLogout();
      setUserSate(null);
      userStorage.clear();
    } catch (e) {}
  };

  return { authorize, logout };
}
