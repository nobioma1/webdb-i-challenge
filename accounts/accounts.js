const express = require('express');
const {
  getAccounts,
  getAccountById,
  deleteAccount,
  createAccount,
  updateAccount
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

accountsRouter.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const account = await createAccount(req.body);
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json('Error adding account');
  }
});

accountsRouter.put('/:id', async (req, res) => {
  const { params: { id }, body } = req;
  try {
    const account = await updateAccount(id, body);
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json('Error updating account');
  }
});

module.exports = accountsRouter;
