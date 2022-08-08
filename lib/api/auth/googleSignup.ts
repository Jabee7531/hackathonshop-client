import client from "../client";

export async function googleSignup(
  accessToken: string | null,
  nickname: string
) {
  const response = await client.post("/users/signup", {
    accessToken: accessToken,
    nickName: nickname,
    provider: "google",
  });
  return response.data;
}
