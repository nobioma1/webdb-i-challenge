const express = require('express');
const { getAccounts } = require('./accountsDbHelper');

const accountsRouter = express.Router();

accountsRouter.get('/', async (req, res) => {
  try {
    const accounts = await getAccounts();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json('Error getting Accounts')
  }
});

module.exports = accountsRouter;
