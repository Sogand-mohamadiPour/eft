const STORAGE_KEY = "signupOtp";

export function saveSignupOtp({ phone, tempToken }) {
  sessionStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ phone, tempToken }),
  );
}

export function getSignupOtp() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export function clearSignupOtp() {
  sessionStorage.removeItem(STORAGE_KEY);
}
