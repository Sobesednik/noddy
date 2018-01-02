const actualVersion = process.version

async function Context () {
    const version = 'v5.10.5'
    Object.defineProperty(process, 'version', {
        get() {
            return version
        },
    })

    this.version = version
    this._destroy = () => {
        Object.defineProperty(process, 'version', {
            get() {
                return actualVersion
            },
        })
    }
}

module.exports = Context
