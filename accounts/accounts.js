const express = require('express');
const { getAccounts, getAccountById  } = require('./accountsDbHelper');

const accountsRouter = express.Router();

accountsRouter.get('/', async (req, res) => {
  try {
    const accounts = await getAccounts();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json('Error getting Accounts')
  }
});

accountsRouter.get('/:id', async (req, res) => {
  try {
    const account = await getAccountById(req.params.id);
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json('Error getting account')
  }
});

module.exports = accountsRouter;
