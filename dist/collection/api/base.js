const API_ROUTES = {
    auth: 'auth'
};
const ApiBase = {
    async auth(apiUrl, googleIdToken) {
        if (!googleIdToken)
            return;
        await fetch(`${apiUrl}/${API_ROUTES.auth}`, {
            method: 'post',
            body: JSON.stringify({
                id_token: googleIdToken
            })
        });
    }
};
export default ApiBase;
