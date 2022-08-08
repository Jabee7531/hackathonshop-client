import { useCallback } from "react";
import Router from "next/router";
import { useSetRecoilState } from "recoil";
import useAuth from "./useAuth";
import { checkGoogleRegistered } from "../lib/api/auth/checkGoogleRegistered";
import { googleSignin } from "../lib/api/auth/googleSignin";
import { googleTokenState } from "../atoms/authState";
// import { globalDialogState } from "../atoms/globalDialogState";

export default function useGoogleSignin() {
  const setGoogelToken = useSetRecoilState(googleTokenState);
  const { authorize } = useAuth();
  // const setDialogState = useSetRecoilState(globalDialogState);

  const signin = useCallback(
    async (accessToken: string) => {
      try {
        setGoogelToken(accessToken);
        const exists = await checkGoogleRegistered(accessToken);
        if (exists) {
          const { user, jwt } = await googleSignin(accessToken);
          authorize(user, jwt);
        } else {
          // setDialogState({
          //   title: "",
          //   message: "",
          //   isOpen: true,
          // });
          Router.push("/register");
        }
      } catch (e) {
        console.log("구글 로그인 실패");
      }
    },
    [setGoogelToken, authorize]
  );
  return signin;
}
