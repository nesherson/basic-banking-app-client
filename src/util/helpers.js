import { compareAsc, formatISO, isEqual, lightFormat } from 'date-fns';

const transactionMethods = {
  0: 'deposit',
  1: 'withdraw',
  2: 'payment',
};

function parseEnum(methodIndex) {
  return transactionMethods[methodIndex];
}

function mapTransactionsByDate(transactions) {
  const tempTransactions = [...transactions];
  const mappedTransactions = [];

  for (let i = 0; i < tempTransactions.length; i++) {
    let current;
    let tempArr = [];

    if (tempTransactions[i] === null) continue;
    else current = tempTransactions[i];
    for (let j = 0; j < tempTransactions.length; j++) {
      if (tempTransactions[j] === null) continue;
      const tempCurrentDate = new Date(
        lightFormat(new Date(current.createdAt.slice(0, 10)), 'yyyy-MM-dd')
      );

      const tempTransactionDate = new Date(
        lightFormat(
          new Date(tempTransactions[j].createdAt.slice(0, 10)),
          'yyyy-MM-dd'
        )
      );

      if (isEqual(tempCurrentDate, tempTransactionDate)) {
        tempArr.push(tempTransactions[j]);
        tempTransactions[j] = null;
      }
    }

    mappedTransactions.push(tempArr);
  }

  return mappedTransactions;
}

function getOneDimArrIndex(arr, row, col) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === row) {
      break;
    }
    sum += arr[i].length;
  }
  return sum + col;
}

export { parseEnum, mapTransactionsByDate, getOneDimArrIndex };
