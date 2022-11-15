import React from "react";

export interface INavbarItem {
  title: string;
  classProps?: string;
};

export interface ITransactionContext {
  transactionCount: string;
  connectWallet: () => void;
  transactions: string[];
  currentAccount: string;
  isLoading: boolean;
  sendTransaction: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  formData: {
    addressTo: string;
    amount: string;
    keyword: string;
    message: string;
  };
};

export interface ITransaction {
  receiver: string;
  sender: string;
  timestamp: any; // BigNumber
  message: string;
  keyword: string;
  amount: any; // BigNumber
};

export interface IServiceCard {
  color: string;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
};

export interface ITransactionsCard {
  addressTo: string;
  addressFrom: string;
  timestamp: any; // BigNumber
  message: string;
  keyword: string;
  amount: any; // BigNumber
  url: string;
};

export interface IInput {
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
};