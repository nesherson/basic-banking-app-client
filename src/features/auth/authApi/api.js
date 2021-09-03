async function postSignupUser({
  firstName,
  lastName,
  email,
  country,
  password,
}) {
  try {
    const response = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        country,
        password,
      }),
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

async function postLoginUser({ email, password }) {
  try {
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
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

export { postSignupUser, postLoginUser };
