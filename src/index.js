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
const parseVersion = (version = process.version) => {
    const re = /v(\d+)\.(\d+)\.(\d+)/
    const [, ma, mi, p] = re.exec(version)
    const major = parseInt(ma, 10)
    const minor = parseInt(mi, 10)
    const patch = parseInt(p, 10)
    return { major, minor, patch }
}

/**
 * Check if Node.js version is greater than the specified one.
 * @param {string} version version to be compared against, e.g., v5.10.0
 * @returns {boolean} Whether the Node.js version is greater than the given one.
 */
const nodeGt = (version) => {
    const {
        major: nodeMajor,
        minor: nodeMinor,
        patch: nodePatch,
    } = parseVersion(process.version)

    const { major, minor, patch } = parseVersion(version)
    if (major === nodeMajor) {
        if (minor === nodeMinor) {
            return nodePatch > patch
        }
        return nodeMinor > minor
    }
    return nodeMajor > major
}

/**
 * Check if Node.js version is greater than or equal to the specified one.
 * @param {string} version version to be compared against, e.g., v5.10.0
 * @returns {boolean} Whether the Node.js version is greater than or equal to
 * the given one.
 */
const nodeGte = (version) => {
    const {
        major: nodeMajor,
        minor: nodeMinor,
        patch: nodePatch,
    } = parseVersion(process.version)

    const { major, minor, patch } = parseVersion(version)

    if (major === nodeMajor && minor === nodeMinor && patch === nodePatch) {
        return true
    }

    if (major === nodeMajor) {
        if (minor === nodeMinor) {
            return nodePatch > patch
        }
        return nodeMinor > minor
    }
    return nodeMajor > major
}

/**
 * Check if Node.js version is less than the specified one.
 * @param {string} version version to be compared against, e.g., v5.10.0
 * @returns {boolean} Whether the Node.js version is less than the given one.
 */
const nodeLt = (version) => {
    const {
        major: nodeMajor,
        minor: nodeMinor,
        patch: nodePatch,
    } = parseVersion(process.version)

    const { major, minor, patch } = parseVersion(version)
    if (major === nodeMajor) {
        if (minor === nodeMinor) {
            return nodePatch < patch
        }
        return nodeMinor < minor
    }
    return nodeMajor < major
}

/**
 * Check if Node.js version is less or equal to the specified one.
 * @param {string} version version to be compared against, e.g., v5.10.0
 * @returns {boolean} Whether the Node.js version is less than or equal to the
 * given one.
 */
const nodeLte = (version) => {
    const {
        major: nodeMajor,
        minor: nodeMinor,
        patch: nodePatch,
    } = parseVersion(process.version)

    const { major, minor, patch } = parseVersion(version)

    if (major === nodeMajor && minor === nodeMinor && patch === nodePatch) {
        return true
    }

    if (major === nodeMajor) {
        if (minor === nodeMinor) {
            return nodePatch < patch
        }
        return nodeMinor < minor
    }
    return nodeMajor < major
}

module.exports = {
    parseVersion,
    nodeGt,
    nodeLt,
    nodeLte,
    nodeGte,
}
