import { makeAutoObservable, runInAction } from 'mobx';
import { createContext } from 'react';

import { fetchUserData } from '../userApi/api';

class UserStore {
  user = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
  };
  fetchUserDataStatus = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  clearFetchUserDataStatus() {
    runInAction(() => {
      this.fetchUserDataStatus.isFetching = false;
      this.fetchUserDataStatus.isSuccess = false;
      this.fetchUserDataStatus.isError = false;
      this.fetchUserDataStatus.errorMessage = '';
    });
  }

  async getUserData(authData) {
    this.fetchUserDataStatus.isFetching = true;
    try {
      const response = await fetchUserData(authData);
      if (response instanceof Error) {
        throw new Error(response.message);
      }
      runInAction(() => {
        this.user.id = response.id;
        this.user.firstName = response.firstName;
        this.user.lastName = response.lastName;
        this.user.email = response.email;

        this.fetchUserDataStatus.isFetching = false;
        this.fetchUserDataStatus.isSuccess = true;
        this.fetchUserDataStatus.isError = false;
      });
    } catch (error) {
      runInAction(() => {
        this.fetchUserDataStatus.isFetching = false;
        this.fetchUserDataStatus.isSuccess = false;
        this.fetchUserDataStatus.isError = true;
        this.fetchUserDataStatus.errorMessage = error.message;
      });
    }
  }
}

export const UserStoreContext = createContext(new UserStore());
