const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function submitContactForm(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/submit-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || 'Unable to submit the form.');
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        'Connexion au serveur impossible. Verifiez que le backend est lance sur le port 3001.',
      );
    }

    throw error;
  }
}
