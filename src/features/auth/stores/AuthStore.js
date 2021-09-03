import { makeAutoObservable, runInAction, trace } from 'mobx';
import { createContext } from 'react';

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

class AuthStore {
  singupUserStatus = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  clearUserSignupStatus() {
    runInAction(() => {
      this.singupUserStatus.isFetching = false;
      this.singupUserStatus.isSuccess = false;
      this.singupUserStatus.isError = false;
      this.singupUserStatus.errorMessage = '';
    });
  }

  async signupUser(userSignupData) {
    this.singupUserStatus.isFetching = true;
    try {
      const response = await postSignupUser(userSignupData);
      if (response instanceof Error) {
        throw new Error(response.message);
      }
      runInAction(() => {
        this.singupUserStatus.isFetching = false;
        this.singupUserStatus.isSuccess = true;
        this.singupUserStatus.isError = false;
      });
    } catch (error) {
      runInAction(() => {
        this.singupUserStatus.isFetching = false;
        this.singupUserStatus.isSuccess = false;
        this.singupUserStatus.isError = true;
        this.singupUserStatus.errorMessage = error.message;
      });
    }
  }
}

export const AuthStoreContext = createContext(new AuthStore());
