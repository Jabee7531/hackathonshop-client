import { css } from "@emotion/react";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/authState";
import useAuth from "../../hooks/useAuth";
import { User } from "../../interface/interfaces";
import palette from "../../lib/palette";
import LoginButton from "./subComponents/LoginButton";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const userValue = useRecoilValue(userState);
  const { logout } = useAuth();

  const goHome = () => {
    Router.push("/");
  };

  useEffect(() => {
    setUser(userValue);
  }, [userValue]);

  const onLogout = async () => {
    await logout();
  };

  return (
    <div css={HeaderSytle}>
      <div css={HeaderContent}>
        {user ? (
          <button
            css={ButtonStyle}
            onClick={() => {
              alert("hi");
            }}
          >
            {user.nick_name}
          </button>
        ) : (
          <button css={ButtonStyle} onClick={goHome}>
            Hacker ShoP
          </button>
        )}
        <div css={ToolBar}>
          <Link href="/cart">장바구니</Link>
          <Link href="/board/event/1">이벤트</Link>
          <Link href="/board/notice/1">공지</Link>
          {user ? (
            <button css={LogoutButtonStyle} onClick={onLogout}>
              로그아웃
            </button>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

const HeaderSytle = css`
  position: sticky;
  top: 0;
  z-index: 2;

  height: 3rem;
  width: 1300px;

  margin: 0 auto;

  background-color: ${palette.grey["100"]};

  border-bottom: 1px solid ${palette.grey["300"]};
`;

const HeaderContent = css`
  display: flex;

  height: 100%;
  width: 100%;

  justify-content: space-between;
  align-items: center;

  a {
    margin: 0 1rem;

    color: black;
    text-decoration: none;

    &:visited {
      color: black;
    }
  }
`;

const ToolBar = css`
  float: right;

  a {
    color: ${palette.grey["700"]};
    &:visited {
      color: ${palette.grey["700"]};
    }
    &:hover {
      font-weight: bold;
    }
  }
`;

const LogoutButtonStyle = css`
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

const ButtonStyle = css`
  margin: 0 1rem;

  border: none;
  cursor: pointer;

  font-size: 1rem;
  color: black;

  &:visited {
    color: black;
  }

  &:hover {
    font-weight: bold;
  }
`;
