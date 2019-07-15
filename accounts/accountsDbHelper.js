const db = require('../data/dbConfig.js');

module.exports = {
  getAccounts,
};

function getAccounts() {
  return db('accounts');
}

