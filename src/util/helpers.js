const transactionMethods = {
  0: 'deposit',
  1: 'withdraw',
  2: 'payment',
};

function parseEnum(methodIndex) {
  return transactionMethods[methodIndex];
}

export { parseEnum };
