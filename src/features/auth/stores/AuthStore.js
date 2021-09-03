import { makeAutoObservable, runInAction } from 'mobx';
import { createContext } from 'react';

import { postSignupUser, postLoginUser } from '../authApi/api';

import { getLocalDateWithOffset } from '../../../util/date';

class AuthStore {
  singupUserStatus = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  };

  loginUserStatus = {
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

  clearUserLoginStatus() {
    runInAction(() => {
      this.loginUserStatus.isFetching = false;
      this.loginUserStatus.isSuccess = false;
      this.loginUserStatus.isError = false;
      this.loginUserStatus.errorMessage = '';
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

  async loginUser(userLoginData) {
    this.loginUserStatus.isFetching = true;
    try {
      const response = await postLoginUser(userLoginData);
      if (response instanceof Error) {
        throw new Error(response.message);
      }

      const oneHourExpirationTime = 3600000;
      const tokenExpirationDate = new Date(
        getLocalDateWithOffset().getTime() + oneHourExpirationTime
      );

      const userData = JSON.stringify({
        userId: response.id,
        token: response.token,
        tokenExpirationDate,
      });

      localStorage.setItem('userData', userData);

      runInAction(() => {
        this.loginUserStatus.isFetching = false;
        this.loginUserStatus.isSuccess = true;
        this.loginUserStatus.isError = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loginUserStatus.isFetching = false;
        this.loginUserStatus.isSuccess = false;
        this.loginUserStatus.isError = true;
        this.loginUserStatus.errorMessage = error.message;
      });
    }
  }
}

export const AuthStoreContext = createContext(new AuthStore());
