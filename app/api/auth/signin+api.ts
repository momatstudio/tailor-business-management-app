import { API_BASE_URL, API_ENDPOINTS } from "@/config/api";

export async function POST(request: Request) {
  console.log("i am triggered");
  const { email, password } = await request.json();

  try {
    // Forward the request to your Laravel backend
    const laravelResponse = await fetch(
      `${API_BASE_URL}/${API_ENDPOINTS.login}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await laravelResponse.json();
    if (!laravelResponse.ok) {
      throw new Error(data.message) || "Authentication Failed";
    }

    return new Response(JSON.stringify(data), {
      status: laravelResponse.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Sign in failed: ", error);
  }
}
