import client from "../client";

export async function googleLogout() {
  const response = await client.post("/users/signout", {});
  return response.data;
}
