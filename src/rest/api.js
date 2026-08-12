const DEFAULT_API_ORIGIN = "https://eftreset.com";
// const DEFAULT_API_ORIGIN = "http://10.151.62.110:8000";

export const API_ORIGIN =
  import.meta.env.VITE_API_ORIGIN?.trim() || DEFAULT_API_ORIGIN;

export const AUTH_BASE_URL = `${API_ORIGIN}/users/api/auth`;

const JSON_HEADERS = {
  "Content-Type": "application/json",
};

export async function apiRequest(url, options = {}) {
  let response;

  try {
    response = await fetch(url, options);
  } catch {
    throw new Error(
      "ارتباط با سرور برقرار نشد. آدرس API یا اینترنت خود را بررسی کنید.",
    );
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(getErrorMessage(data));
  }

  function getErrorMessage(data) {
    if (data.message) {
      return data.message;
    }

    if (typeof data === "string") {
      return data;
    }

    return (
      Object.values(data).flat().join(" ") || "خطایی رخ داد. دوباره تلاش کنید."
    );
  }

  return data;
}

export function postJson(url, body) {
  return apiRequest(url, {
    method: "POST",
    headers: JSON_HEADERS,
    body: JSON.stringify(body),
  });
}
