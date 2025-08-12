const path = require('path');

module.exports = {
  config:           path.resolve(__dirname, 'config', 'config.cjs'),
  'models-path':    path.resolve(__dirname, 'src', 'app', 'models'),
  'migrations-path': path.resolve(__dirname, 'database', 'migrations'),
  'seeders-path':   path.resolve(__dirname, 'database', 'seeders'),
};
