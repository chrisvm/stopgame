function StatusCode(opts) {
    switch (opts.type) {

        case "not":
        case 300:
            return {
                "code": 300,
                "short": "NOT_OK",
                "error": opts.error
            };
            break;

        case 400:
            return {
                "code": 400,
                "short": "MISSING_OPTS",
                "error: opts.error
            };
            break;

        case 500:
            return {
                "code": 500,
                "short": "ENGINE_ERROR",
                "error": opts.error
            };
            break;

        default:
        case "ok":
        case 200:
            return {
                "code": 200,
                "short": "ALL_OK"
            };
            break;
    }
}

module.exports = {
    "StatusCode": StatusCode
};