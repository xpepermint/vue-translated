module.exports = {

  webpack (defaults) {
    defaults.context = './src';
    defaults.output.filename = './index.js';
    return defaults;
  }

};
