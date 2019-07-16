const db = require('../data/dbConfig.js');

module.exports = {
  getAccounts,
  deleteAccount,
  getAccountById,
  createAccount,
  updateAccount,
};

function getAccounts(query) {
  if (query.hasOwnProperty('sortdir')) {
    return db('accounts')
      .orderBy(query.sortby, query.sortdir)
      .limit(query.limit || 9999999999);
  }
  return db('accounts').limit(query.limit || 99999999999);
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
