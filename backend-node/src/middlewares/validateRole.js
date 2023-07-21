const isAdminRole = (req, res, next) => {
  if (!req.user) {
    return res.status(500).json({
      message: 'You want to verify the role without validating the token first',
    });
  }

  const { role, name } = req.user;

  if (role !== 'ADMIN_ROLE') {
    return res.status(401).json({
      message: `${name}. You do not have the permissions to perform this action`,
    });
  }

  next();
};

module.exports = {
  isAdminRole,
};
