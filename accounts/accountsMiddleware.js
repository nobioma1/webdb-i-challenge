const { getAccountById } = require('./accountsDbHelper');

const validateId = async (req, res, next) => {
  try {
    const account = await getAccountById(req.params.id);
    if (!account) {
      res.status(400).json({ error: 'Account ID is not Valid' });
    }
    req.account = account;
    return next();
  } catch (error) {
    res.status(500).json({ error: 'Error Validating account Id' });
  }
};

const validatePost = async (req, res, next) => {
  if (req.body) {
    const { body } = req;
    const haveData =
      body.hasOwnProperty('name') && body.hasOwnProperty('budget');
    if (haveData) {
      return next();
    }
    res.status(400).json({ error: 'Name and Budget is Required' });
  }
};

module.exports = { validateId, validatePost };
