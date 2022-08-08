import { User } from "../../../interface/interfaces";
import client from "../client";

export async function googleSignin(access_token: string | null): Promise<any> {
  const response = await client.post("/users/signin", {
    accessToken: access_token,
  });
  return response.data.result;
}
