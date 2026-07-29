import { AUTH_BASE_URL, postJson } from "./api";

export async function registerUser(userData) {
  return postJson(`${AUTH_BASE_URL}/register/`, userData);
}

export async function requestOtp(phone) {
  return postJson(`${AUTH_BASE_URL}/request-otp/`, { phone });
}

export async function verifyOtp(otp_code, temp_token) {
  return postJson(`${AUTH_BASE_URL}/verify-otp/`, {
    otp_code,
    temp_token,
  });
}

export async function loginUser(credentials) {
  return postJson(`${AUTH_BASE_URL}/login/`, credentials);
}
