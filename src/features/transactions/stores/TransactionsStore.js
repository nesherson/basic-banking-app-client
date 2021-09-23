import { makeAutoObservable, runInAction } from 'mobx';
import { createContext } from 'react';

import {
  fetchLatestTransactions,
  fetchLastMonthTransactions,
  postNewDeposit,
  postNewWithdraw,
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
  postNewDepositStatus = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  };
  postNewWithdrawStatus = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  };
  newTransaction = {
    activeMethod: 'deposit',
    depositAmount: 0,
    withdrawAmount: 0,
  };

  handleMethodChange(method) {
    if (method === this.newTransaction.activeMethod) return;
    runInAction(() => {
      this.newTransaction.activeMethod = method;
      this.newTransaction.depositAmount = 0;
      this.newTransaction.withdrawAmount = 0;
    });
  }

  handleAmountChange(amount) {
    runInAction(() => {
      if (this.newTransaction.activeMethod === 'deposit')
        this.newTransaction.depositAmount = amount;
      else this.newTransaction.withdrawAmount = amount;
    });
  }

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

  clearPostNewDepositStatus() {
    runInAction(() => {
      this.fetchLastMonthTransactionsStatus.isFetching = false;
      this.fetchLastMonthTransactionsStatus.isSuccess = false;
      this.fetchLastMonthTransactionsStatus.isError = false;
      this.fetchLastMonthTransactionsStatus.errorMessage = '';
    });
  }

  clearPostNewWithdrawtStatus() {
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

  async makeNewDeposit(transactionData) {
    this.postNewDepositStatus.isFetching = true;
    try {
      const response = await postNewDeposit(transactionData);
      if (response instanceof Error) {
        throw new Error(response.message);
      }
      runInAction(() => {
        this.postNewDepositStatus.isFetching = false;
        this.postNewDepositStatus.isSuccess = true;
        this.postNewDepositStatus.isError = false;
      });
    } catch (error) {
      runInAction(() => {
        this.postNewDepositStatus.isFetching = false;
        this.postNewDepositStatus.isSuccess = false;
        this.postNewDepositStatus.isError = true;
        this.postNewDepositStatus.errorMessage = error.message;
      });
    }
  }

  async makeNewWithdraw(transactionData) {
    this.postNewWithdrawStatus.isFetching = true;
    try {
      const response = await postNewWithdraw(transactionData);
      if (response instanceof Error) {
        throw new Error(response.message);
      }
      runInAction(() => {
        this.postNewWithdrawStatus.isFetching = false;
        this.postNewWithdrawStatus.isSuccess = true;
        this.postNewWithdrawStatus.isError = false;
      });
    } catch (error) {
      runInAction(() => {
        this.postNewWithdrawStatus.isFetching = false;
        this.postNewWithdrawStatus.isSuccess = false;
        this.postNewWithdrawStatus.isError = true;
        this.postNewWithdrawStatus.errorMessage = error.message;
      });
    }
  }
}

export const TransactionsStoreContext = createContext(new TransactionsStore());
