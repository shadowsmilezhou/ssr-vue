const { camelCase } = require('lodash');

const NGExternals = function () {
  return function (context, request, callback) {
    if (request.startsWith('@angular/')) {
      let result = {
        root: null,
        commonjs: request,
        commonjs2: request,
        amd: request
      }
      result.root = ['ng'].concat(request.replace(/^@angular\//, '').split('/').map(x => camelCase(x)));
      return callback(null, result);
    }
    callback();
  };
};

module.exports = NGExternals;
module.exports.default = NGExternals;