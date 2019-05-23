const RXJSExternals = function () {
  return function (context, request, callback) {
    if (request.startsWith('rxjs')) {
      let result = {
        root: request.split('/'),
        commonjs: request,
        commonjs2: request,
        amd: request
      }
      return callback(null, result);
    }
    callback();
  };
};

module.exports = RXJSExternals;
module.exports.default = RXJSExternals;