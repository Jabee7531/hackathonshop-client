import { useState } from "react";
import { useRecoilValue } from "recoil";
import { googleTokenState } from "../atoms/authState";
import { googleSignin } from "../lib/api/auth/googleSignin";
import { googleSignup } from "../lib/api/auth/googleSignup";
import useAuth from "./useAuth";
import Router from "next/router";

export default function useGoogleSignup() {
  const { authorize } = useAuth();
  const googleToken = useRecoilValue(googleTokenState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (nickName: string) => {
    setLoading(true);
    try {
      await googleSignup(googleToken, nickName);
      const { user, jwt } = await googleSignin(googleToken);
      authorize(user, jwt);
      Router.push("/");
    } catch (e: any) {
      if (e.response.status === 409) {
        throw e;
      }
    } finally {
      setLoading(false);
    }
  };
  return {
    signup,
    loading,
    error,
  };
}
