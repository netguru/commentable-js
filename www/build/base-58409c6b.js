const API_ROUTES = {
    auth: 'auth',
    commentsList: (id) => `commentable/${id}/comments/list`,
    commentsAdd: (id) => `commentable/${id}/comments/add`
};
const ApiBase = {
    async fetch(endpoint, requestConfig) {
        const response = await fetch(endpoint, Object.assign(Object.assign({}, requestConfig), { headers: {
                'Content-Type': 'application/json'
            } }));
        return response.json();
    },
    auth(apiUrl, googleIdToken) {
        if (!googleIdToken)
            return;
        return this.fetch(`${apiUrl}/${API_ROUTES.auth}`, {
            method: 'post',
            body: JSON.stringify({
                id_token: googleIdToken
            })
        });
    },
    fetchComments(apiUrl, commentableId, params) {
        return this.fetch(`${apiUrl}/${API_ROUTES.commentsList(commentableId)}`, {
            method: 'post',
            body: JSON.stringify(params)
        });
    },
    addComment(apiUrl, commentableId, { authToken, message }) {
        return this.fetch(`${apiUrl}/${API_ROUTES.commentsAdd(commentableId)}`, {
            method: 'post',
            body: JSON.stringify({
                auth_token: authToken,
                body: message
            })
        });
    }
};

export { ApiBase as A };
