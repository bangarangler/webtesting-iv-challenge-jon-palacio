module.exports = {
  jwtSecret:
    process.env.JWT_SECRET ||
    "IF all else fails then use this if env is no where to be found"
};
