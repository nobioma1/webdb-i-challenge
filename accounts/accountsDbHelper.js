const db = require('../data/dbConfig.js');

module.exports = {
  getAccounts,
  deleteAccount,
  getAccountById,
  createAccount,
  updateAccount,
};

function getAccounts() {
  return db('accounts');
}

function getAccountById(id) {
  return db('accounts')
    .where({ id })
    .first();
}

function deleteAccount(id) {
  return db('accounts')
    .where({ id })
    .del();
}

function createAccount(account) {
  return db('accounts')
    .insert(account)
    .then(([id]) => getAccountById(id));
}

function updateAccount(id, account) {
  return db('accounts')
    .where({ id })
    .update(account)
    .then(() => getAccountById(id));
}
