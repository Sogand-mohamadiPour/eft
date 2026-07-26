const BASE_URL = "https://eftreset.com/users/api/auth";

async function request(url, options) {
  const response = await fetch(url, options);

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

export async function registerUser(userData) {
  return request(`${BASE_URL}/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}

export async function requestOtp(phone) {
  return request(`${BASE_URL}/request-otp/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone,
    }),
  });
}

export async function verifyOtp(otp_code, temp_token) {
  return request(`${BASE_URL}/verify-otp/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      otp_code,
      temp_token,
    }),
  });
}