import { makeAutoObservable, runInAction } from 'mobx';
import { createContext } from 'react';

import { fetchLatestTransactions } from '../transactionsApi/api';

class TransactionsStore {
  transactions = [];
  fetchLatestTransactionsStatus = {
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

  async getLatestTransactions(authData) {
    this.fetchLatestTransactionsStatus.isFetching = true;
    try {
      const response = await fetchLatestTransactions(authData);
      if (response instanceof Error) {
        throw new Error(response.message);
      }
      runInAction(() => {
        this.transactions = response;

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
}

export const TransactionsStoreContext = createContext(new TransactionsStore());
