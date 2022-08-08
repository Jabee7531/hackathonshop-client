/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import useGoogleSignin from "../../../hooks/useGoogleSignin";
import palette from "../../../lib/palette";

const LoginButton = () => {
  const buttonRef = useRef(null);
  const signin = useGoogleSignin();

  const onSuccess = useCallback(
    (googleUser: any) => {
      signin(googleUser.getAuthResponse(true).access_token);
    },
    [signin]
  );
  const onFailure = useCallback((e: any) => {}, []);
  useEffect(() => {
    (window as any).gapi?.load("auth2", function () {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      const auth2 = (window as any).gapi?.auth2.init({
        client_id: process.env.NEXT_PUBLIC_GAPI_CLIENT_ID,
        cookiepolicy: "single_host_origin",
        plugin_name: "HackathonShop",
      });
      auth2.attachClickHandler(
        buttonRef.current,
        {},
        (googleUser: any) => {
          onSuccess(googleUser);
        },
        onFailure
      );
    });
  }, [onSuccess, onFailure]);

  return (
    <button css={LoginButtonStyle} ref={buttonRef}>
      로그인
    </button>
  );
};

export default LoginButton;

const LoginButtonStyle = css`
  margin: 0 1rem;

  border: none;
  cursor: pointer;

  font-size: 1rem;
  color: ${palette.grey["700"]};

  &:visited {
    color: ${palette.grey["700"]};
  }

  &:hover {
    font-weight: bold;
  }
`;
