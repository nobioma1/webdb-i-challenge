const express = require('express');
const { validateId, validatePost } = require('./accountsMiddleware');
const {
  getAccounts,
  getAccountById,
  deleteAccount,
  createAccount,
  updateAccount,
} = require('./accountsDbHelper');

const accountsRouter = express.Router();

accountsRouter.get('/', async (req, res) => {
  const { query } = req;
  try {
    const accounts = await getAccounts(query);
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: 'Error getting Accounts' });
  }
});

accountsRouter.get('/:id', validateId, async (req, res) => {
  res.status(200).json(req.account);
});

accountsRouter.delete('/:id', validateId, async (req, res) => {
  try {
    await deleteAccount(req.account.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting Accounts' });
  }
});

accountsRouter.post('/', validatePost, async (req, res) => {
  try {
    const account = await createAccount(req.body);
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ error: 'Error adding account' });
  }
});

accountsRouter.put('/:id', validateId, validatePost, async (req, res) => {
  const { body, account: { id } } = req;
  try {
    const account = await updateAccount(id, body);
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ error: 'Error updating account' });
  }
});

module.exports = accountsRouter;
