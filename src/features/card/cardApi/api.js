async function fetchCardData({ id, token }) {
  try {
    const response = await fetch(`http://localhost:5000/cards/user/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(data.error);
  } catch (error) {
    return error;
  }
}

export { fetchCardData };
