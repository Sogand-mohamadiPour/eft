export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getPasswordRules(password, confirmPassword) {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasLength = password.length >= 8;
  const isMatch = confirmPassword.length > 0 && password === confirmPassword;
  const isValid = hasLetter && hasNumber && hasSymbol && hasLength && isMatch;

  return {
    hasLetter,
    hasNumber,
    hasSymbol,
    hasLength,
    isMatch,
    isValid,
  };
}
