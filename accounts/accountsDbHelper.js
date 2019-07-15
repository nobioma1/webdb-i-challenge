const db = require('../data/dbConfig.js');

module.exports = {
  getAccounts,
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
