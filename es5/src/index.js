function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

/**
 * @typedef {Object} Version
 * @property {number} major
 * @property {number} minor
 * @property {number} patch
 */

/**
 * Parse the given version, or use Node's version for parsing.
 * @param {string} [version] Node version, e.g., 8.9.3. If none given, the
 * current version is parsed.
 * @returns {Version} parsed version
 */
var parseVersion = function parseVersion() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.version;
  var re = /v(\d+)\.(\d+)\.(\d+)/;

  var _re$exec = re.exec(version),
      _re$exec2 = _slicedToArray(_re$exec, 4),
      ma = _re$exec2[1],
      mi = _re$exec2[2],
      p = _re$exec2[3];

  var major = parseInt(ma, 10);
  var minor = parseInt(mi, 10);
  var patch = parseInt(p, 10);
  return {
    major,
    minor,
    patch
  };
};
/**
 * Check if Node.js version is greater than the specified one.
 * @param {string} version version to be compared against, e.g., v5.10.0
 * @returns {boolean} Whether the Node.js version is greater than the given one.
 */


var nodeGt = function nodeGt(version) {
  var _parseVersion = parseVersion(process.version),
      nodeMajor = _parseVersion.major,
      nodeMinor = _parseVersion.minor,
      nodePatch = _parseVersion.patch;

  var _parseVersion2 = parseVersion(version),
      major = _parseVersion2.major,
      minor = _parseVersion2.minor,
      patch = _parseVersion2.patch;

  if (major === nodeMajor) {
    if (minor === nodeMinor) {
      return nodePatch > patch;
    }

    return nodeMinor > minor;
  }

  return nodeMajor > major;
};
/**
 * Check if Node.js version is greater than or equal to the specified one.
 * @param {string} version version to be compared against, e.g., v5.10.0
 * @returns {boolean} Whether the Node.js version is greater than or equal to
 * the given one.
 */


var nodeGte = function nodeGte(version) {
  var _parseVersion3 = parseVersion(process.version),
      nodeMajor = _parseVersion3.major,
      nodeMinor = _parseVersion3.minor,
      nodePatch = _parseVersion3.patch;

  var _parseVersion4 = parseVersion(version),
      major = _parseVersion4.major,
      minor = _parseVersion4.minor,
      patch = _parseVersion4.patch;

  if (major === nodeMajor && minor === nodeMinor && patch === nodePatch) {
    return true;
  }

  if (major === nodeMajor) {
    if (minor === nodeMinor) {
      return nodePatch > patch;
    }

    return nodeMinor > minor;
  }

  return nodeMajor > major;
};
/**
 * Check if Node.js version is less than the specified one.
 * @param {string} version version to be compared against, e.g., v5.10.0
 * @returns {boolean} Whether the Node.js version is less than the given one.
 */


var nodeLt = function nodeLt(version) {
  var _parseVersion5 = parseVersion(process.version),
      nodeMajor = _parseVersion5.major,
      nodeMinor = _parseVersion5.minor,
      nodePatch = _parseVersion5.patch;

  var _parseVersion6 = parseVersion(version),
      major = _parseVersion6.major,
      minor = _parseVersion6.minor,
      patch = _parseVersion6.patch;

  if (major === nodeMajor) {
    if (minor === nodeMinor) {
      return nodePatch < patch;
    }

    return nodeMinor < minor;
  }

  return nodeMajor < major;
};
/**
 * Check if Node.js version is less or equal to the specified one.
 * @param {string} version version to be compared against, e.g., v5.10.0
 * @returns {boolean} Whether the Node.js version is less than or equal to the
 * given one.
 */


var nodeLte = function nodeLte(version) {
  var _parseVersion7 = parseVersion(process.version),
      nodeMajor = _parseVersion7.major,
      nodeMinor = _parseVersion7.minor,
      nodePatch = _parseVersion7.patch;

  var _parseVersion8 = parseVersion(version),
      major = _parseVersion8.major,
      minor = _parseVersion8.minor,
      patch = _parseVersion8.patch;

  if (major === nodeMajor && minor === nodeMinor && patch === nodePatch) {
    return true;
  }

  if (major === nodeMajor) {
    if (minor === nodeMinor) {
      return nodePatch < patch;
    }

    return nodeMinor < minor;
  }

  return nodeMajor < major;
};

module.exports = {
  parseVersion,
  nodeGt,
  nodeLt,
  nodeLte,
  nodeGte
};