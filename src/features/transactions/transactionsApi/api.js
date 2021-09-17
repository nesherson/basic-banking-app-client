async function fetchLatestTransactions({ cardId, token }) {
  try {
    const response = await fetch(
      `http://localhost:5000/transactions/card/${cardId}/latest?resultLimit=4`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(data.error);
  } catch (error) {
    return error;
  }
}

async function fetchLastMonthTransactions({ cardId, token }) {
  try {
    const response = await fetch(
      `http://localhost:5000/transactions/card/${cardId}/last-month`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(data.error);
  } catch (error) {
    return error;
  }
}

async function postNewDeposit({ cardId, token, amount }) {
  try {
    const response = await fetch(
      `http://localhost:5000/transactions/card/${cardId}/deposit`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cardId,
          amount,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(data.error);
  } catch (error) {
    return error;
  }
}

async function postNewWithdraw({ cardId, token, amount }) {
  try {
    const response = await fetch(
      `http://localhost:5000/transactions/withdraw`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cardId,
          amount,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(data.error);
  } catch (error) {
    return error;
  }
}
export {
  fetchLatestTransactions,
  fetchLastMonthTransactions,
  postNewDeposit,
  postNewWithdraw,
};
