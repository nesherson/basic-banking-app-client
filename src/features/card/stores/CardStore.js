import { makeAutoObservable, runInAction } from 'mobx';
import { createContext } from 'react';

import { fetchCardData } from '../cardApi/api';

class CardStore {
  card = {
    id: null,
    cardNumber: '',
    type: '',
    network: '',
    balance: null,
    userId: null,
  };
  fetchCardDataStatus = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  clearFetchCardDataStatus() {
    runInAction(() => {
      this.fetchCardDataStatus.isFetching = false;
      this.fetchCardDataStatus.isSuccess = false;
      this.fetchCardDataStatus.isError = false;
      this.fetchCardDataStatus.errorMessage = '';
    });
  }

  async getCardData(authData) {
    this.fetchCardDataStatus.isFetching = true;
    try {
      const response = await fetchCardData(authData);
      if (response instanceof Error) {
        throw new Error(response.message);
      }
      runInAction(() => {
        this.card.id = response.id;
        this.card.cardNumber = response.cardNumber;
        this.card.type = response.type;
        this.card.network = response.network;
        this.card.balance = response.balance;
        this.card.userId = response.userId;

        this.fetchCardDataStatus.isFetching = false;
        this.fetchCardDataStatus.isSuccess = true;
        this.fetchCardDataStatus.isError = false;
      });
    } catch (error) {
      runInAction(() => {
        this.fetchCardDataStatus.isFetching = false;
        this.fetchCardDataStatus.isSuccess = false;
        this.fetchCardDataStatus.isError = true;
        this.fetchCardDataStatus.errorMessage = error.message;
      });
    }
  }
}

export const CardStoreContext = createContext(new CardStore());
