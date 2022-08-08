import client from "../client";

export async function checkGoogleRegistered(
  access_token: string | null
): Promise<boolean> {
  const response = await client.post("/users/check", {
    accessToken: access_token,
  });
  return response.data.result.exist;
}
