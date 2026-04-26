const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateFormPayload(payload) {
  const normalized = {
    name: String(payload?.name || '').trim(),
    email: String(payload?.email || '').trim(),
    phone: String(payload?.phone || '').trim(),
    message: String(payload?.message || '').trim(),
  };

  if (!normalized.name || !normalized.email || !normalized.phone || !normalized.message) {
    return {
      valid: false,
      error: 'All fields are required.',
    };
  }

  if (!emailPattern.test(normalized.email)) {
    return {
      valid: false,
      error: 'A valid email address is required.',
    };
  }

  return {
    valid: true,
    data: normalized,
  };
}

