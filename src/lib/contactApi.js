const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
const CONTACT_ENDPOINT = `${API_BASE_URL}/api/contact`;
const GENERIC_ERROR_MESSAGE = "Erreur lors de l'envoi. Veuillez r\u00E9essayer.";

async function readJson(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

export async function submitContactForm(formData) {
  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await readJson(response);

    if (!response.ok) {
      throw new Error(data?.message || GENERIC_ERROR_MESSAGE);
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(GENERIC_ERROR_MESSAGE);
    }

    throw error;
  }
}
