import { makeAutoObservable, runInAction } from 'mobx';
import { createContext } from 'react';

import {
  fetchLatestTransactions,
  fetchLastMonthTransactions,
} from '../transactionsApi/api';

class TransactionsStore {
  latestTransactions = [];
  lastMonthTransactions = [];
  fetchLatestTransactionsStatus = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  };
  fetchLastMonthTransactionsStatus = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  clearFetchLatestTransactionsStatus() {
    runInAction(() => {
      this.fetchLatestTransactionsStatus.isFetching = false;
      this.fetchLatestTransactionsStatus.isSuccess = false;
      this.fetchLatestTransactionsStatus.isError = false;
      this.fetchLatestTransactionsStatus.errorMessage = '';
    });
  }

  clearFetchLastMonthTransactionsStatus() {
    runInAction(() => {
      this.fetchLastMonthTransactionsStatus.isFetching = false;
      this.fetchLastMonthTransactionsStatus.isSuccess = false;
      this.fetchLastMonthTransactionsStatus.isError = false;
      this.fetchLastMonthTransactionsStatus.errorMessage = '';
    });
  }

  async getLatestTransactions(authData) {
    this.fetchLatestTransactionsStatus.isFetching = true;
    try {
      const response = await fetchLatestTransactions(authData);
      if (response instanceof Error) {
        throw new Error(response.message);
      }
      runInAction(() => {
        this.latestTransactions = response;

        this.fetchLatestTransactionsStatus.isFetching = false;
        this.fetchLatestTransactionsStatus.isSuccess = true;
        this.fetchLatestTransactionsStatus.isError = false;
      });
    } catch (error) {
      runInAction(() => {
        this.fetchLatestTransactionsStatus.isFetching = false;
        this.fetchLatestTransactionsStatus.isSuccess = false;
        this.fetchLatestTransactionsStatus.isError = true;
        this.fetchLatestTransactionsStatus.errorMessage = error.message;
      });
    }
  }

  async getLastMonthTransactions(authData) {
    this.fetchLastMonthTransactionsStatus.isFetching = true;
    try {
      const response = await fetchLastMonthTransactions(authData);
      if (response instanceof Error) {
        throw new Error(response.message);
      }
      runInAction(() => {
        this.lastMonthTransactions = response;

        this.fetchLastMonthTransactionsStatus.isFetching = false;
        this.fetchLastMonthTransactionsStatus.isSuccess = true;
        this.fetchLastMonthTransactionsStatus.isError = false;
      });
    } catch (error) {
      runInAction(() => {
        this.fetchLastMonthTransactionsStatus.isFetching = false;
        this.fetchLastMonthTransactionsStatus.isSuccess = false;
        this.fetchLastMonthTransactionsStatus.isError = true;
        this.fetchLastMonthTransactionsStatus.errorMessage = error.message;
      });
    }
  }
}

export const TransactionsStoreContext = createContext(new TransactionsStore());
