const { Router } = require('express');
const fs = require('fs');

const PATH_ROUTER = __dirname;

const router = Router();
/**
 *
 * @returns
 */

const removeExtension = (fileName) => {
  return fileName.split('.').shift();
};

fs.readdirSync(PATH_ROUTER).filter((file) => {
  const name = removeExtension(file);
  if (name !== 'index') {
    console.log(`Router... /${name}`);
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
