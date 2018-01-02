var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
    return { major, minor, patch };
};

/**
 * Check if Node.js version is greater than the specified one.
 * @param {string} version version to be compared against, e.g., v5.10.0
 * @returns {boolean} Whether the Node.js version is less than the given one.
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
            return nodePatch < patch;
        }
        return nodeMinor < minor;
    }
    return nodeMajor > major;
};

module.exports = {
    parseVersion,
    nodeGt
};