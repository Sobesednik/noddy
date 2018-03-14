var actualVersion = process.version;

function Context() {
  return new Promise(function ($return, $error) {
    var version = 'v5.10.5';
    Object.defineProperty(process, 'version', {
      get() {
        return version;
      }

    });
    this.version = version;

    this._destroy = function () {
      Object.defineProperty(process, 'version', {
        get() {
          return actualVersion;
        }

      });
    };

    return $return();
  }.bind(this));
}

module.exports = Context;