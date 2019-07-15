const db = require('../data/dbConfig.js');

module.exports = {
  getAccounts,
  deleteAccount,
  getAccountById,
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
