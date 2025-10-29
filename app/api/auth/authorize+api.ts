import {
  APP_SCHEME,
  BASE_URL,
  GOOGLE_AUTH_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_REDIRECT_URI,
} from "@/constants/constants";

export async function GET(request: Request) {
  if (!GOOGLE_CLIENT_ID) {
    return Response.json(
      { error: "GOOGLE_CLIENT_ID is not found" },
      { status: 500 }
    );
  }

  const url = new URL(request.url);

  let idpClientId: string;

  const internalClient = url.searchParams.get("client_id");
  const redirect_uri = url.searchParams.get("redirect_uri");

  let platform: string;

  if (redirect_uri === APP_SCHEME) {
    platform = "mobile";
  } else if (redirect_uri === BASE_URL) {
    platform = "web";
  } else {
    return Response.json({ error: "Invalid redirectUri" }, { status: 400 });
  }

  // use state to drive redirect back to platform
  let state = platform + "|" + url.searchParams.get("state");

  if (internalClient === "google") {
    idpClientId = GOOGLE_CLIENT_ID;
  } else {
    return Response.json({ error: "Invalid client" }, { status: 500 });
  }

  const params = new URLSearchParams({
    client_id: idpClientId,
    redirect_uri: GOOGLE_REDIRECT_URI,
    response_type: "code",
    scope: url.searchParams.get("scope") || "identity",
    state: state,
    prompt: "select_account",
  });

  return Response.redirect(GOOGLE_AUTH_URL + "?" + params.toString());
}
