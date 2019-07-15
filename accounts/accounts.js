const express = require('express');
const {
  getAccounts,
  getAccountById,
  deleteAccount,
} = require('./accountsDbHelper');

const accountsRouter = express.Router();

accountsRouter.get('/', async (req, res) => {
  try {
    const accounts = await getAccounts();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json('Error getting Accounts');
  }
});

accountsRouter.get('/:id', async (req, res) => {
  try {
    const account = await getAccountById(req.params.id);
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json('Error getting account');
  }
});

accountsRouter.delete('/:id', async (req, res) => {
  try {
    await deleteAccount(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json('Error deleting Accounts');
  }
});

module.exports = accountsRouter;
